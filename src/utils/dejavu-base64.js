import { dejavuBase64 } from '@/utils/dejavu-base64';
doc.addFileToVFS('DejaVuSans.ttf', dejavuBase64);
doc.addFont('DejaVuSans.ttf', 'DejaVuSans', 'normal');
doc.setFont('DejaVuSans');
