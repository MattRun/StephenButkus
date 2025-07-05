declare module './send-emails' {
    export function sendVerificationEmail(to: string, verificationUrl: string): Promise<void>;
  }
  