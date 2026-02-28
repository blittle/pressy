/**
 * Build the magic link email HTML.
 */
export function buildMagicLinkEmail(verifyUrl: string, bookTitle?: string): string {
  const title = bookTitle || 'your book'
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: Georgia, 'Times New Roman', serif; max-width: 480px; margin: 0 auto; padding: 2rem; color: #1a1a1a;">
  <h2 style="margin-bottom: 0.5rem;">Recover your purchase</h2>
  <p>Click the link below to restore access to ${title}. This link expires in 15 minutes.</p>
  <p style="margin: 1.5rem 0;">
    <a href="${verifyUrl}" style="display: inline-block; padding: 0.75rem 1.5rem; background: #2563eb; color: #fff; text-decoration: none; border-radius: 0.5rem; font-weight: 600;">
      Restore Access
    </a>
  </p>
  <p style="font-size: 0.85rem; color: #666;">If you didn't request this, you can safely ignore this email.</p>
</body>
</html>`.trim()
}
