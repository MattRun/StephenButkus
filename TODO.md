 # TODO List

## 1. User Authentication and Verification

### Signup Flow
- [ ] **Send Verification Code**: Ensure verification email with a 4-digit code is sent upon user registration. Troubleshoot email sending logic if users report not receiving emails.
  - **File(s) Involved**: `app/dashboard/pages/api/auth/register/route.ts`, `utils/send-email.js`
  - **Notes**: Test email functionality for consistent delivery to users.

- [ ] **Implement Automatic Login After Signup**: Automatically log in users after registration and verification, and update the header with the user email.
  - **File(s) Involved**: `app/dashboard/pages/auth/register/route.ts`, `app/dashboard/pages/auth/confirmation/page.tsx`, `Navigation.js`
  - **Notes**: Ensure JWT token is stored locally after verification to prevent conflicts.

### Verification Page
- [ ] **Create Verification Code Input Page**: Users should enter the 4-digit verification code sent via email to complete registration.
  - **File(s) Involved**: `app/dashboard/pages/auth/confirmation/page.tsx`
  - **Notes**: Include error handling for expired or incorrect codes.

- [ ] **Verification Code Resend Option**: Allow users to request a new 4-digit code if the previous one expires, limiting resend frequency to prevent abuse.
  - **File(s) Involved**: `app/dashboard/pages/api/auth/resend-code/route.ts`, `app/dashboard/pages/auth/confirmation/page.tsx`

## 2. Navigation and Header

### Header Update Logic
- [ ] **Dynamic Header Updates on Login/Signup**: Ensure the header dynamically reflects user login status without requiring a page refresh.
  - **File(s) Involved**: `Navigation.js`
  - **Notes**: Header should display the user email and allow logout functionality after login/signup.

### Header Components and Styling
- [ ] **Reintegrate All Header Components**: Include the following in the header:
  - Yelp Badge
  - Google Customer Reviews Badge
  - “Contact Us” button
- [ ] **Add Dropdowns for Training Categories**: Restore dropdowns for training categories under "Training" and ensure courses are accessible under each category in both desktop and mobile views.
  - **File(s) Involved**: `Navigation.js`, `DropdownMenu.js`, `MobileDropdown.js`

## 3. User Portal

### Portal Design and Structure
- [ ] **Design User Portal Structure**: Implement a placeholder User Portal page, accessible upon login.
  - **File(s) Involved**: `app/dashboard/pages/auth/portal/page.tsx`
  - **Notes**: This portal will be a central hub linking to "My Account," "My Courses," "Billing," and potentially additional resources.

## 4. Account and Billing

### Account Management
- [ ] **Create "My Account" Page**: Allow users to view and update their profile information such as email, name, and password.
  - **File(s) Involved**: `app/dashboard/pages/account/page.tsx`
  - **Notes**: Ensure user data updates in the database with appropriate validation and error handling.

### Billing and Payment History
- [ ] **Implement "Billing" Page**: Display user billing history, invoices, and payment methods, and allow users to manage payment details.
  - **File(s) Involved**: `app/dashboard/pages/account/billing/page.tsx`, `app/dashboard/pages/api/billing/`
  - **Notes**: Ensure billing data is securely stored and displayed only to authenticated users.

## 5. Payment API Integration

### Integration with Chosen Payment API
- [ ] **Integrate Payment Gateway**: Use the selected payment API (e.g., **Stripe** or **PayPal**) to handle course payments.
  - **File(s) Involved**: `app/dashboard/pages/api/payment/route.ts`, `app/dashboard/pages/account/billing/payment-methods.tsx`
  - **Notes**: Implement secure tokenization for transactions, support for multiple payment methods, and error handling for failed transactions.

### Testing and Debugging
- [ ] **Testing Payment Flow**: Test payment flow from checkout to confirmation, and ensure billing information updates in real-time for the user.

## 6. TalentLMS Integration

### Course Data Sync
- [ ] **Sync Course Data with TalentLMS**: Implement API integration to pull course data from TalentLMS and display it on the platform.
  - **File(s) Involved**: `app/dashboard/pages/api/talentlms/route.ts`, `app/dashboard/pages/alltraining`
  - **Notes**: Set up regular sync intervals and error handling for API rate limits.

### User Progress Sync
- [ ] **Implement Progress Sync with TalentLMS**: Ensure user course progress updates from TalentLMS to the platform and displays accurately in the portal.
  - **File(s) Involved**: `app/dashboard/pages/auth/portal/page.tsx`
  - **Notes**: Update progress at regular intervals or upon user request, as needed by TalentLMS API constraints.

## 7. Error Handling and Debugging

### Email Verification Errors
- [ ] **Fix Verification Code Errors**: Address Prisma schema errors with `verificationCode` and `codeExpiresAt` fields.
  - **File(s) Involved**: `app/dashboard/pages/api/auth/verify-code/route.ts`
  - **Notes**: Ensure the Prisma schema is synchronized and accessible without type errors.

### Local Storage Handling
- [ ] **Client-Side Check for Local Storage**: Wrap all `localStorage` calls in a client-side check to prevent server-side errors.
  - **File(s) Involved**: `Navigation.js`, `app/dashboard/pages/auth/signin/page.tsx`

## 8. Miscellaneous Enhancements

### Course Data Organization
- [ ] **Organize Course Data for Dropdowns**: Centralize course data in a single object to populate dropdown menus dynamically.
  - **File(s) Involved**: `Navigation.js`, `DropdownMenu.js`
  - **Notes**: Ensure consistent data access for both desktop and mobile menus.

### Responsive Design for Header and Navigation
- [ ] **Finalize Header and Dropdown Styling**: Ensure the header, dropdowns, and navigation function well on both desktop and mobile views.

---

## Future Enhancements (Optional)

### Additional Account Features
- [ ] **Add Profile Image Upload**: Allow users to upload profile images in the "My Account" page.
- [ ] **Two-Factor Authentication (2FA)**: Implement 2FA for added account security during login.

### Security Enhancements
- [ ] **Rate Limiting and Throttling for API Endpoints**: Implement rate limiting on endpoints (e.g., register, verify-code) to prevent abuse.
- [ ] **Password Reset Workflow**: Add a "Forgot Password" feature that sends a reset link to the user’s email.

## Testing

### Unit and Integration Tests
- [ ] **Authentication Flow Testing**: Write tests to cover registration, email verification, login, and logout workflows.
- [ ] **Header Logic Testing**: Verify that the header updates correctly without requiring a page refresh.

## Notes
- Set up all necessary environment variables for integration, including `SENDGRID_API_KEY`, `DATABASE_URL` (Prisma), and payment API keys.
- Test each feature individually before full integration to ensure compatibility across the app.

---

Need to add Demo Talent LMS Page for Courses