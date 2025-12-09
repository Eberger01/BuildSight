# Claude Code Configuration

This directory contains local configuration for Claude Code and MCP servers. These files are excluded from git for security.

## Setup Instructions

### 1. MCP Settings

Copy `mcp_settings.example.json` to `mcp_settings.json` and update with your credentials:

```bash
cp mcp_settings.example.json mcp_settings.json
```

Then update the following values:

- **Supabase**:
  - Connection string: `postgresql://postgres:YOUR_PASSWORD@db.YOUR_PROJECT_REF.supabase.co:5432/postgres`
  - `SUPABASE_URL`: Your Supabase project URL
  - `SUPABASE_ANON_KEY`: Your Supabase anonymous/publishable key
  - `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase service role key

- **Linear**:
  - `LINEAR_API_KEY`: Your Linear API key (optional)

### 2. Get Your Credentials

**Supabase**:
1. Go to https://supabase.com/dashboard
2. Select your BuildSight project
3. Go to Project Settings > API
4. Copy the URL and keys

**Linear** (Optional):
1. Go to https://linear.app/settings/api
2. Create a personal API key

### 3. Reload VSCode

After updating the configuration, reload the VSCode window to activate the MCP servers.

## Files

- `mcp_settings.json` - Your actual MCP configuration (gitignored)
- `mcp_settings.example.json` - Template for MCP configuration
- `settings.json` - Other Claude Code settings (gitignored)
- `README.md` - This file
