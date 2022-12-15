import { t } from 'ttag';

// images
import FilePng from './images/file.png';
import DocPng from './images/doc.png';
import XmlPng from './images/xml.png';
import PdfPng from './images/pdf.png';

export const FILES = [
  {
    url: '/docs/terms_and_conditions.pdf',
    name: t`Terms and Conditions`,
  },
  {
    url: '/docs/underage_gaming_policy.pdf',
    name: t`Underage policy`,
  },
  {
    url: '/docs/know_your_customer_policy.pdf',
    name: t`Know your customer policy`,
  },
  {
    url: '/docs/aml_policy.pdf',
    name: t`Risk Management and Procedures`,
  },
  {
    url: '/docs/responsible_gaming_policy.pdf',
    name: t`Responsible Gaming Policy`,
  },
  {
    url: '/docs/privacy_policy.pdf',
    name: t`Privacy Policy`,
  },
  {
    url: '/docs/withdrawal_policy.pdf',
    name: t`Withdrawal Policy`,
  },
  {
    url: '/docs/refund_policy.pdf',
    name: t`Refund Policy`,
  },
];

const FILE_TYPES = {
  pdf: PdfPng,
  xml: XmlPng,
  doc: DocPng,
};

export const getFileIcon = (type) => {
  return FILE_TYPES[type] || FilePng;
};
