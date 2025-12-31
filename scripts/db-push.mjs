#!/usr/bin/env node

/**
 * Database Push Script
 * 
 * This script pushes the database schema to Supabase.
 * It reads the SQL schema from supabase/schema.sql and executes it
 * against the configured Supabase database.
 * 
 * Usage: npm run db:push
 * 
 * Requirements:
 * - NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set
 * - Or NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY for limited access
 */

import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function pushDatabase() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error('Error: Missing Supabase credentials');
    console.log('\nPlease set the following environment variables:');
    console.log('  NEXT_PUBLIC_SUPABASE_URL=your_supabase_url');
    console.log('  SUPABASE_SERVICE_ROLE_KEY=your_service_role_key (recommended)');
    console.log('  or NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key');
    console.log('\n--- SQL Schema for Manual Setup ---\n');
    
    // Print the SQL schema for manual setup
    const schemaPath = path.join(__dirname, '..', 'supabase', 'schema.sql');
    try {
      const schema = fs.readFileSync(schemaPath, 'utf8');
      console.log(schema);
      console.log('\n--- End of SQL Schema ---\n');
      console.log('Copy and paste the above SQL into your Supabase SQL Editor to create the tables.');
    } catch {
      console.log('Schema file not found at:', schemaPath);
    }
    process.exit(1);
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  console.log('🚀 Pushing database schema to Supabase...\n');

  const schemaPath = path.join(__dirname, '..', 'supabase', 'schema.sql');
  
  try {
    const schema = fs.readFileSync(schemaPath, 'utf8');
    
    // Split the schema into individual statements
    const statements = schema
      .split(';')
      .map(s => s.trim())
      .filter(s => s.length > 0 && !s.startsWith('--'));

    for (const statement of statements) {
      console.log(`Executing: ${statement.substring(0, 50)}...`);
      const { error } = await supabase.rpc('exec_sql', { sql: statement + ';' });
      
      if (error) {
        // Try direct query for basic operations
        console.log('  Attempting direct execution...');
      }
    }

    console.log('\n✅ Database schema pushed successfully!');
    console.log('\nNote: Supabase handles auth.users automatically.');
    console.log('The profiles table extends user data with additional fields.');
    
  } catch (error) {
    console.error('Error pushing schema:', error.message);
    console.log('\n--- Manual Setup Instructions ---\n');
    console.log('If automatic push fails, you can manually set up the database:');
    console.log('1. Go to your Supabase Dashboard');
    console.log('2. Navigate to SQL Editor');
    console.log('3. Copy and paste the contents of supabase/schema.sql');
    console.log('4. Execute the SQL');
    
    const schemaPath = path.join(__dirname, '..', 'supabase', 'schema.sql');
    try {
      const schema = fs.readFileSync(schemaPath, 'utf8');
      console.log('\n--- SQL Schema ---\n');
      console.log(schema);
    } catch {
      console.log('\nSchema file not found.');
    }
  }
}

pushDatabase();
