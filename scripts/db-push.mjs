#!/usr/bin/env node

/**
 * Database Push Script
 * 
 * This script outputs the database schema for Supabase.
 * Since Supabase doesn't support arbitrary SQL execution via the client library,
 * this script prints the schema for manual execution in the Supabase SQL Editor.
 * 
 * Usage: npm run db:push
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function pushDatabase() {
  const schemaPath = path.join(__dirname, '..', 'supabase', 'schema.sql');
  
  console.log('🚀 ShipTheVibe Database Schema\n');
  
  try {
    const schema = fs.readFileSync(schemaPath, 'utf8');
    
    console.log('To set up your database, follow these steps:\n');
    console.log('1. Go to your Supabase Dashboard (https://supabase.com/dashboard)');
    console.log('2. Select your project');
    console.log('3. Navigate to SQL Editor');
    console.log('4. Copy and paste the SQL below');
    console.log('5. Click "Run" to execute\n');
    console.log('--- SQL Schema ---\n');
    console.log(schema);
    console.log('\n--- End of SQL Schema ---\n');
    console.log('Note: Supabase handles auth.users automatically.');
    console.log('The profiles table extends user data with additional fields.');
    console.log('The ai_prompts table stores AI interactions (optional).\n');
    
  } catch (error) {
    console.error('Error reading schema file:', error.message);
    console.log('\nSchema file should be located at: supabase/schema.sql');
    process.exit(1);
  }
}

pushDatabase();
