// Environment variables validation for deployment
export function validateEnvironment() {
  const requiredEnvVars = [
    'OPENAI_API_KEY',
    'POSTGRES_URL',
    'AWS_AK',
    'AWS_SK',
    'AWS_REGION',
    'AWS_BUCKET',
    'NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY',
    'STRIPE_PUBLIC_KEY',
    'STRIPE_PRIVATE_KEY',
    'WEB_BASE_URI'
  ];

  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

  if (missingVars.length > 0) {
    console.error('❌ Missing required environment variables:');
    missingVars.forEach(varName => {
      console.error(`  - ${varName}`);
    });
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
  }

  console.log('✅ All required environment variables are set');
}

// Optional: Validate in development mode
if (process.env.NODE_ENV === 'development') {
  try {
    validateEnvironment();
  } catch (error) {
    console.warn('⚠️  Environment validation failed in development mode:', error.message);
  }
}