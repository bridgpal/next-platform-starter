import { Markdown } from '../../components/markdown';

export const metadata = {
    title: 'Privacy Policy'
};

const privacyContent = `
**Effective Date:** January 1, 2025

## Introduction

Welcome to our website. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, and what rights you have in relation to it.

By using our website, you agree to the collection and use of information in accordance with this policy.

## Information We Collect

We may collect the following types of information when you visit or interact with our site:

- **Usage Data:** Information such as your IP address, browser type, operating system, referring URLs, pages visited, and the dates and times of your visits.
- **Form Submissions:** Any information you voluntarily provide through forms on our site, such as your name, email address, and message content.
- **Cookies and Tracking Technologies:** We may use cookies, web beacons, and similar technologies to enhance your experience and gather information about how the site is used.

## How We Use Your Information

We use the information we collect for the following purposes:

- To operate, maintain, and improve our website
- To respond to your inquiries and fulfill your requests
- To analyze usage trends and monitor the effectiveness of our content
- To detect, prevent, and address technical issues or security threats
- To comply with legal obligations

## Data Sharing and Disclosure

We do not sell your personal information. We may share your information in the following circumstances:

- **Service Providers:** With trusted third-party vendors who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
- **Legal Requirements:** If required to do so by law or in response to valid requests by public authorities.
- **Business Transfers:** In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business.

## Data Security

We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.

## Your Rights

Depending on your location, you may have the following rights regarding your personal data:

- The right to access the personal data we hold about you
- The right to request correction of inaccurate data
- The right to request deletion of your data
- The right to restrict or object to our processing of your data
- The right to data portability

To exercise any of these rights, please contact us using the information provided below.

## Third-Party Links

Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.

## Children's Privacy

Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such data, we will take steps to delete it promptly.

## Changes to This Policy

We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.

## Contact Us

If you have any questions or concerns about this Privacy Policy, please reach out to us through the contact form on our website.
`;

export default function Page() {
    return (
        <>
            <h1>Privacy Policy</h1>
            <Markdown content={privacyContent} />
        </>
    );
}
