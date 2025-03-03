import html2canvas from "html2canvas";
import domtoimage from "dom-to-image";
import { jsPDF } from "jspdf";

export const downloadPDF = async (element: HTMLDivElement | null) => {
  if (!element) return;

  try {
    const { width, height } = element.getBoundingClientRect();

    const scale = 6;

    const dataUrl = await domtoimage.toPng(element, {
      width: width * scale,
      height: height * scale,
      style: {
        transform: `scale(${scale})`,
        transformOrigin: "top left",
        width: `${width}px`,
        height: `${height}px`,
      },
      quality: 1.0,
      bgcolor: "#FFFFFF",
    });

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const imgProps = pdf.getImageProperties(dataUrl);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight, undefined, "FAST");
    pdf.save(`Ethan Le Neindre - CV ${new Date().getFullYear()}.pdf`);
  } catch (error) {
    console.error("Erreur lors de la génération du PDF:", error);
  }
};

export const downloadPNG = async (element: HTMLDivElement | null) => {
  if (!element) return;

  const canvas = await html2canvas(element);
  const imgData = canvas.toDataURL("image/png");

  const link = document.createElement("a");
  link.href = imgData;
  link.download = `Ethan Le Neindre - CV ${new Date().getFullYear()}.png`;
  link.click();
};
