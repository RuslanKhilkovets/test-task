import { PDFDocument, rgb  } from 'pdf-lib';
import getDataFromURL from '../../components/parseJSON';
import RobotoTTF from './Roboto-Black.ttf'; // Вам потрібно завантажити файл шрифту Arial (наприклад, arial.ttf)
import fontkit from '@pdf-lib/fontkit';


const createPDF = async (id: number) => {
    const url = `http://localhost:3001/rows/${id}`
    const dataFromServer = await getDataFromURL(url)
        .then(parsedData => {
            return parsedData;
        })
        .catch(() => {
            window.location.replace("/server-error")
        });
        
    const MicrosoftSansSerifFontUrl = 'https://db.onlinewebfonts.com/t/643e59524d730ce6c6f2384eebf945f8.ttf'
    const fontBytes = await fetch(MicrosoftSansSerifFontUrl).then(res => res.arrayBuffer())

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([595, 842]);
    const { width, height } = page.getSize();

    let MicrosoftSansSerif;
    if (fontBytes) {
      pdfDoc.registerFontkit(fontkit);
      MicrosoftSansSerif = await pdfDoc.embedFont(fontBytes);
    }
    const pdfDocumentText = `ПІБ: ${dataFromServer.initials}\n
Дата народження: ${dataFromServer.birthdayDate}\n
Штрих-код: ${dataFromServer.code}\n
Контракт: ${dataFromServer.contract}\n
Статус замовлення: ${dataFromServer.status}\n`

    page.drawText(pdfDocumentText, {
        x: 50,
        y: height - 100,
        lineHeight: 24,
        size: 18,
        font: MicrosoftSansSerif,
        color: rgb(0, 0, 0),
    });

    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
};

export default createPDF;