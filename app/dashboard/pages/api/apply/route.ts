// // /dashboard/pages/api/apply/route.ts

// import { NextRequest, NextResponse } from "next/server";
// import sgMail from "@sendgrid/mail";

// export const dynamic = "force-dynamic";
// sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

// export async function POST(req: NextRequest) {
//   try {
//     const formData = await req.formData();

//     // Extract fields (all values come as strings)
//     const fullName = formData.get("fullName")?.toString();
//     const email = formData.get("email")?.toString();
//     const phone = formData.get("phone")?.toString();
//     const address = formData.get("address")?.toString() || "";
//     const jobTitle = formData.get("jobTitle")?.toString();
//     const availability = formData.get("availability")?.toString();
//     const preferredStartDate = formData.get("preferredStartDate")?.toString();
//     const relevantExperienceRaw = formData.get("relevantExperience")?.toString();
//     // Parse the JSON string into an array; if not provided, default to an empty array.
//     const relevantExperience = relevantExperienceRaw ? JSON.parse(relevantExperienceRaw) : [];

//     // Validate required fields
//     if (!fullName || !email || !phone || !jobTitle || !preferredStartDate) {
//       return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
//     }

//     // Process resume file if provided
//     let resumeAttachment = null;
//     const resumeFile = formData.get("resume");
//     if (resumeFile && resumeFile instanceof File) {
//       const arrayBuffer = await resumeFile.arrayBuffer();
//       const base64 = Buffer.from(arrayBuffer).toString("base64");
//       resumeAttachment = {
//         content: base64,
//         filename: resumeFile.name,
//         type: resumeFile.type,
//         disposition: "attachment",
//       };
//     }

//     // Ensure phone number is prefixed with +1
//     let formattedPhone = phone;
//     if (!formattedPhone.startsWith("+1")) {
//       formattedPhone = "+1 " + formattedPhone;
//     }

//     // Use the admin email from environment or fallback
//     const adminEmail = process.env.ADMIN_EMAIL || "info@pinnaclelab.com";

//     // Build the admin email HTML using a table for clarity.
//     const adminHtml = `
//       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px;">
//         <h2 style="color: #16436F;">New Job Application Received</h2>
//         <table style="width: 100%; border-collapse: collapse;">
//           <tr>
//             <td style="padding: 8px; border: 1px solid #ddd;"><strong>Name:</strong></td>
//             <td style="padding: 8px; border: 1px solid #ddd;">${fullName}</td>
//           </tr>
//           <tr>
//             <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td>
//             <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
//           </tr>
//           <tr>
//             <td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone:</strong></td>
//             <td style="padding: 8px; border: 1px solid #ddd;">${formattedPhone}</td>
//           </tr>
//           <tr>
//             <td style="padding: 8px; border: 1px solid #ddd;"><strong>Job Position:</strong></td>
//             <td style="padding: 8px; border: 1px solid #ddd;">${jobTitle}</td>
//           </tr>
//           <tr>
//             <td style="padding: 8px; border: 1px solid #ddd;"><strong>Preferred Start Date:</strong></td>
//             <td style="padding: 8px; border: 1px solid #ddd;">${preferredStartDate}</td>
//           </tr>
//           <tr>
//             <td style="padding: 8px; border: 1px solid #ddd;"><strong>Availability:</strong></td>
//             <td style="padding: 8px; border: 1px solid #ddd;">${availability || "Not provided"}</td>
//           </tr>
//           <tr>
//             <td style="padding: 8px; border: 1px solid #ddd;"><strong>Address:</strong></td>
//             <td style="padding: 8px; border: 1px solid #ddd;">${address || "Not provided"}</td>
//           </tr>
//           <tr>
//             <td style="padding: 8px; border: 1px solid #ddd; vertical-align: top;"><strong>Relevant Experience:</strong></td>
//             <td style="padding: 8px; border: 1px solid #ddd;">
//               ${relevantExperience.length > 0 ? "<ul>" + relevantExperience.map((exp: string) => `<li>${exp}</li>`).join("") + "</ul>" : "Not provided"}
//             </td>
//           </tr>
//         </table>
//       </div>
//     `;

//     const adminNotificationEmail = {
//       to: adminEmail,
//       from: adminEmail,
//       subject: `New Job Application: ${jobTitle}`,
//       html: adminHtml,
//     };
//     if (resumeAttachment) {
//       (adminNotificationEmail as any).attachments = [resumeAttachment];
//     }

//     // Prepare user confirmation email (a simple thank-you note)
//     const userHtml = `
//       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px;">
//         <h2 style="color: #16436F;">Thank You for Your Application, ${fullName}!</h2>
//         <p>Your application for <strong>${jobTitle}</strong> has been received. We will review your details and contact you soon.</p>
//         <p>Best Regards,<br /><strong>Pinnacle Lab Team</strong></p>
//       </div>
//     `;
//     const userEmailObj = {
//       to: email,
//       from: adminEmail,
//       subject: `Application Received for ${jobTitle}`,
//       html: userHtml,
//     };

//     // Send the emails
//     await sgMail.send(adminNotificationEmail);
//     await sgMail.send(userEmailObj);

//     return NextResponse.json({ message: "Application submitted successfully!" }, { status: 200 });
//   } catch (error: any) {
//     console.error("Error processing job application:", error);
//     return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
//   }
// }



















// // /dashboard/pages/api/apply/route.ts

// import { NextRequest, NextResponse } from "next/server";
// import sgMail from "@sendgrid/mail";

// export const dynamic = "force-dynamic";
// sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

// export async function POST(req: NextRequest) {
//   try {
//     const formData = await req.formData();

//     // Personal Data
//     const firstName = formData.get("firstName")?.toString();
//     const middleName = formData.get("middleName")?.toString() || "";
//     const lastName = formData.get("lastName")?.toString();
//     const address = formData.get("address")?.toString() || "";
//     const homePhone = formData.get("homePhone")?.toString() || "";
//     const email = formData.get("email")?.toString();
//     const preferredStartDate = formData.get("preferredStartDate")?.toString();

//     // Position Information
//     const hours = formData.get("hours")?.toString();
//     const position = formData.get("position")?.toString();
//     const city = formData.get("city")?.toString() || "";
//     const stateField = formData.get("state")?.toString() || "";
//     const zip = formData.get("zip")?.toString() || "";
//     const cellularPhone = formData.get("cellularPhone")?.toString() || "";
//     const businessPhone = formData.get("businessPhone")?.toString() || "";
//     const salaryDesired = formData.get("salaryDesired")?.toString() || "";

//     // Work Preferences (sent as a JSON string)
//     const workPreferencesRaw = formData.get("workPreferences")?.toString() || "{}";
//     const workPreferences = JSON.parse(workPreferencesRaw);

//     // Felony information
//     const felony = formData.get("felony")?.toString();
//     const felonyExplanation = formData.get("felonyExplanation")?.toString() || "";

//     // Qualifications
//     const education = formData.get("education")?.toString() || "";
//     const specialSkills = formData.get("specialSkills")?.toString() || "";
//     const references = formData.get("references")?.toString() || "";
//     const workHistory = formData.get("workHistory")?.toString() || "";

//     // Certification & Signature
//     const certification = formData.get("certification")?.toString() === "true";
//     const signature = formData.get("signature")?.toString() || "";
//     const signatureDate = formData.get("signatureDate")?.toString() || "";

//     // Relevant Experience (JSON string of bullet points)
//     const relevantExperienceRaw = formData.get("relevantExperience")?.toString() || "[]";
//     const relevantExperience = JSON.parse(relevantExperienceRaw);

//     // Resume file (optional)
//     let resumeAttachment = null;
//     const resumeFile = formData.get("resume");
//     if (resumeFile && resumeFile instanceof File) {
//       const arrayBuffer = await resumeFile.arrayBuffer();
//       const base64 = Buffer.from(arrayBuffer).toString("base64");
//       resumeAttachment = {
//         content: base64,
//         filename: resumeFile.name,
//         type: resumeFile.type,
//         disposition: "attachment",
//       };
//     }

//     // Validate required fields
//     if (!firstName || !lastName || !email || !homePhone || !preferredStartDate || !hours || !position || !certification) {
//       return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
//     }

//     // Construct full name (we use First Middle Last)
//     const fullName = `${firstName} ${middleName ? middleName + " " : ""}${lastName}`;

//     // Format phone numbers: assume client has sent them as (000) 000-0000.
//     // Here, we add a "+1" prefix.
//     const formatPhoneForEmail = (phone: string) => phone.startsWith("+1") ? phone : `+1 ${phone}`;

//     const formattedHomePhone = formatPhoneForEmail(homePhone);
//     const formattedCellularPhone = cellularPhone ? formatPhoneForEmail(cellularPhone) : "Not provided";
//     const formattedBusinessPhone = businessPhone ? formatPhoneForEmail(businessPhone) : "Not provided";

//     // Use the admin email or fallback.
//     const adminEmail = process.env.ADMIN_EMAIL || "info@pinnaclelab.com";

//     // Build a table-based HTML for admin email
//     const adminHtml = `
//       <div style="font-family: Arial, sans-serif; max-width: 700px; margin: auto; padding: 20px;">
//         <h2 style="color: #16436F;">New Job Application Received</h2>
//         <table style="width: 100%; border-collapse: collapse;">
//           <tr>
//             <td style="padding: 8px; border: 1px solid #ddd;"><strong>Name:</strong></td>
//             <td style="padding: 8px; border: 1px solid #ddd;">${fullName}</td>
//           </tr>
//           <tr>
//             <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td>
//             <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
//           </tr>
//           <tr>
//             <td style="padding: 8px; border: 1px solid #ddd;"><strong>Home Phone:</strong></td>
//             <td style="padding: 8px; border: 1px solid #ddd;">${formattedHomePhone}</td>
//           </tr>
//           <tr>
//             <td style="padding: 8px; border: 1px solid #ddd;"><strong>Address:</strong></td>
//             <td style="padding: 8px; border: 1px solid #ddd;">${address || "Not provided"}</td>
//           </tr>
//           <tr>
//             <td style="padding: 8px; border: 1px solid #ddd;"><strong>Preferred Start Date:</strong></td>
//             <td style="padding: 8px; border: 1px solid #ddd;">${preferredStartDate}</td>
//           </tr>
//           <tr>
//             <td style="padding: 8px; border: 1px solid #ddd;"><strong>Hours:</strong></td>
//             <td style="padding: 8px; border: 1px solid #ddd;">${hours}</td>
//           </tr>
//           <tr>
//             <td style="padding: 8px; border: 1px solid #ddd;"><strong>Position:</strong></td>
//             <td style="padding: 8px; border: 1px solid #ddd;">${position}</td>
//           </tr>
//           <tr>
//             <td style="padding: 8px; border: 1px solid #ddd;"><strong>City/State/Zip:</strong></td>
//             <td style="padding: 8px; border: 1px solid #ddd;">${city}, ${stateField} ${zip}</td>
//           </tr>
//           <tr>
//             <td style="padding: 8px; border: 1px solid #ddd;"><strong>Cellular Phone:</strong></td>
//             <td style="padding: 8px; border: 1px solid #ddd;">${formattedCellularPhone}</td>
//           </tr>
//           <tr>
//             <td style="padding: 8px; border: 1px solid #ddd;"><strong>Business Phone:</strong></td>
//             <td style="padding: 8px; border: 1px solid #ddd;">${formattedBusinessPhone}</td>
//           </tr>
//           <tr>
//             <td style="padding: 8px; border: 1px solid #ddd;"><strong>Salary Desired:</strong></td>
//             <td style="padding: 8px; border: 1px solid #ddd;">${salaryDesired || "Not provided"}</td>
//           </tr>
//           <tr>
//             <td style="padding: 8px; border: 1px solid #ddd; vertical-align: top;"><strong>Work Preferences:</strong></td>
//             <td style="padding: 8px; border: 1px solid #ddd;">
//               ${Object.entries(workPreferences)
//                 .filter(([_, v]) => v)
//                 .map(([k]) => `<div>${k}</div>`)
//                 .join("") || "None selected"}
//             </td>
//           </tr>
//           <tr>
//             <td style="padding: 8px; border: 1px solid #ddd;"><strong>Felony Conviction:</strong></td>
//             <td style="padding: 8px; border: 1px solid #ddd;">${felony || "Not provided"}</td>
//           </tr>
//           ${felony === "Yes" ? `
//           <tr>
//             <td style="padding: 8px; border: 1px solid #ddd;"><strong>Explanation:</strong></td>
//             <td style="padding: 8px; border: 1px solid #ddd;">${felonyExplanation}</td>
//           </tr>` : ""}
//           <tr>
//             <td style="padding: 8px; border: 1px solid #ddd;"><strong>Education/Training:</strong></td>
//             <td style="padding: 8px; border: 1px solid #ddd;">${education || "Not provided"}</td>
//           </tr>
//           <tr>
//             <td style="padding: 8px; border: 1px solid #ddd;"><strong>Special Skills:</strong></td>
//             <td style="padding: 8px; border: 1px solid #ddd;">${specialSkills || "Not provided"}</td>
//           </tr>
//           <tr>
//             <td style="padding: 8px; border: 1px solid #ddd;"><strong>References:</strong></td>
//             <td style="padding: 8px; border: 1px solid #ddd;">${references || "Not provided"}</td>
//           </tr>
//           <tr>
//             <td style="padding: 8px; border: 1px solid #ddd;"><strong>Work History:</strong></td>
//             <td style="padding: 8px; border: 1px solid #ddd;">${workHistory || "Not provided"}</td>
//           </tr>
//           <tr>
//             <td style="padding: 8px; border: 1px solid #ddd;"><strong>Certification:</strong></td>
//             <td style="padding: 8px; border: 1px solid #ddd;">${certification ? "Certified" : "Not Certified"}</td>
//           </tr>
//           <tr>
//             <td style="padding: 8px; border: 1px solid #ddd;"><strong>Signature:</strong></td>
//             <td style="padding: 8px; border: 1px solid #ddd;">${signature || "Not provided"}</td>
//           </tr>
//           <tr>
//             <td style="padding: 8px; border: 1px solid #ddd;"><strong>Signature Date:</strong></td>
//             <td style="padding: 8px; border: 1px solid #ddd;">${signatureDate || "Not provided"}</td>
//           </tr>
//           <tr>
//             <td style="padding: 8px; border: 1px solid #ddd; vertical-align: top;"><strong>Relevant Experience:</strong></td>
//             <td style="padding: 8px; border: 1px solid #ddd;">
//               ${relevantExperience.length > 0 ? "<ul>" + relevantExperience.map((exp: string) => `<li>${exp}</li>`).join("") + "</ul>" : "None provided"}
//             </td>
//           </tr>
//         </table>
//       </div>
//     `;

//     // Build a similar copy for the applicant email (here we simply echo back the submitted values)
//     const applicantHtml = `
//       <div style="font-family: Arial, sans-serif; max-width: 700px; margin: auto; padding: 20px;">
//         <h2 style="color: #16436F;">Copy of Your Application</h2>
//         <p>Below is a copy of the information you submitted:</p>
//         ${adminHtml}
//       </div>
//     `;

//     // Prepare email objects
//     const adminEmailObj: any = {
//       to: adminEmail,
//       from: adminEmail,
//       subject: `New Job Application: ${position}`,
//       html: adminHtml,
//     };
//     if (resumeAttachment) {
//       adminEmailObj.attachments = [resumeAttachment];
//     }
//     const applicantEmailObj: any = {
//       to: email,
//       from: adminEmail,
//       subject: `Your Application for ${position}`,
//       html: applicantHtml,
//     };
//     if (resumeAttachment) {
//       applicantEmailObj.attachments = [resumeAttachment];
//     }

//     // Send emails (first to admin, then a copy to the applicant)
//     await sgMail.send(adminEmailObj);
//     await sgMail.send(applicantEmailObj);

//     return NextResponse.json({ message: "Application submitted successfully!" }, { status: 200 });
//   } catch (error: any) {
//     console.error("Error processing job application:", error);
//     return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
//   }
// }



















// /dashboard/pages/api/apply/route.ts

import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

export const dynamic = "force-dynamic";
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    // PERSONAL DATA
    const firstName = formData.get("firstName")?.toString();
    const mi = formData.get("mi")?.toString() || "";
    const lastName = formData.get("lastName")?.toString();
    const address = formData.get("address")?.toString() || "";
    const homePhone = formData.get("homePhone")?.toString();
    const secondaryPhone = formData.get("secondaryPhone")?.toString() || "";
    const email = formData.get("email")?.toString();
    const preferredStartDate = formData.get("preferredStartDate")?.toString();

    // POSITION INFORMATION
    const hours = formData.get("hours")?.toString();
    const position = formData.get("position")?.toString();
    const preferredLocation = formData.get("preferredLocation")?.toString();
    const compensationType = formData.get("compensationType")?.toString();
    const compensationAmount = formData.get("compensationAmount")?.toString();

    // WORK SCHEDULE PREFERENCES (as JSON)
    const workPreferencesRaw = formData.get("workPreferences")?.toString() || "{}";
    const workPreferences = JSON.parse(workPreferencesRaw);

    // FELONY CONVICTION
    const felony = formData.get("felony")?.toString();
    const felonyExplanation = formData.get("felonyExplanation")?.toString() || "";

    // QUALIFICATIONS
    const education = formData.get("education")?.toString() || "";
    const specialSkills = formData.get("specialSkills")?.toString() || "";
    const references = formData.get("references")?.toString() || "";
    const workHistory = formData.get("workHistory")?.toString() || "";

    // RELEVANT EXPERIENCE (JSON array)
    const relevantExperienceRaw = formData.get("relevantExperience")?.toString() || "[]";
    const relevantExperience = JSON.parse(relevantExperienceRaw);

    // CERTIFICATION & SIGNATURE
    const certification = formData.get("certification")?.toString() === "true";
    const signature = formData.get("signature")?.toString() || "";
    const signatureDate = formData.get("signatureDate")?.toString() || "";

    // RESUME
    let resumeAttachment = null;
    const resumeFile = formData.get("resume");
    if (resumeFile && resumeFile instanceof File) {
      const arrayBuffer = await resumeFile.arrayBuffer();
      const base64 = Buffer.from(arrayBuffer).toString("base64");
      resumeAttachment = {
        content: base64,
        filename: resumeFile.name,
        type: resumeFile.type,
        disposition: "attachment",
      };
    }

    // Validate required fields
    if (!firstName || !lastName || !email || !homePhone || !preferredStartDate ||
        !hours || !position || !preferredLocation || !compensationType || !compensationAmount ||
        !certification || !signature || !signatureDate) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Construct full name (First MI Last)
    const fullName = `${firstName} ${mi ? mi + " " : ""}${lastName}`;

    // Format phone numbers (prepend +1 if needed)
    const formatPhone = (phone: string) => phone.startsWith("+1") ? phone : `+1 ${phone}`;
    const formattedHomePhone = formatPhone(homePhone);
    const formattedSecondaryPhone = secondaryPhone ? formatPhone(secondaryPhone) : "Not provided";

    // Use admin email from env or fallback
    const adminEmail = process.env.ADMIN_EMAIL || "info@pinnaclelab.com";

    // Build admin email HTML (table layout for easy printing/downloading)
    const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px;">
        <h2 style="color: #16436F;">New Job Application Received</h2>
        <p>You can print or download this application for your records.</p>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Name:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Home Phone:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${formattedHomePhone}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Secondary Phone:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${formattedSecondaryPhone}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Home Address:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${address || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Preferred Start Date:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${preferredStartDate}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Availability (Hours):</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${hours}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Position:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${position}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Preferred Pinnacle Location:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${preferredLocation}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Compensation:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${compensationType} - ${compensationAmount}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; vertical-align: top;"><strong>Work Schedule Preferences:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">
              ${Object.entries(workPreferences)
                .filter(([_, v]) => v)
                .map(([k]) => `<div>${k}</div>`)
                .join("") || "None selected"}
            </td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Felony Conviction:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${felony || "Not provided"}</td>
          </tr>
          ${felony === "Yes" ? `
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Felony Explanation:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${felonyExplanation}</td>
          </tr>` : ""}
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Education/Training:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${education || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Special Skills:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${specialSkills || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>References:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${references || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Work History:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${workHistory || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Relevant Experience:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">
              ${relevantExperience.length > 0 ? "<ul>" + relevantExperience.map((exp: string) => `<li>${exp}</li>`).join("") + "</ul>" : "None provided"}
            </td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Certification:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${certification ? "Certified" : "Not Certified"}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Signature:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${signature}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Signature Date:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${signatureDate}</td>
          </tr>
        </table>
      </div>
    `;

    // Build applicant email HTML with a friendly thank-you message.
    const applicantHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px;">
        <h2 style="color: #16436F;">Thank You for Your Application</h2>
        <p>We have received your application. Attached is a copy of your application for your records. You may print or download it.</p>
        ${adminHtml}
      </div>
    `;

    // Prepare email objects
    const adminEmailObj: any = {
      to: adminEmail,
      from: adminEmail,
      subject: `New Job Application: ${position}`,
      html: adminHtml,
    };
    if (resumeAttachment) {
      adminEmailObj.attachments = [resumeAttachment];
    }
    const applicantEmailObj: any = {
      to: email,
      from: adminEmail,
      subject: `Your Application for ${position}`,
      html: applicantHtml,
    };
    if (resumeAttachment) {
      applicantEmailObj.attachments = [resumeAttachment];
    }

    // Send emails
    await sgMail.send(adminEmailObj);
    await sgMail.send(applicantEmailObj);

    return NextResponse.json({ message: "Application submitted successfully!" }, { status: 200 });
  } catch (error: any) {
    console.error("Error processing job application:", error);
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
  }
}
