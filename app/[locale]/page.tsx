// Simple disabled login page to avoid Supabase errors

export default function LoginPage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🔒 Login is currently disabled</h1>
      <p>This app is using OpenAI only. No authentication is required at the moment.</p>
    </div>
  );
}
