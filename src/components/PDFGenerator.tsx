
import React, { useState } from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import PDFDocument from './PDFDocument';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Sample data for the PDF report
const sampleReportData = {
  pageInfo: {
    current: 20,
    total: 31,
    date: 'Friday, May 09, 2008'
  },
  billingRun: 'Flight Charges',
  period: {
    from: 'Oct/1/2007',
    until: 'Oct/31/2007',
    status: 'Archived'
  },
  date: 'Oct/20/2007',
  flights: [
    {
      flightNumber: 'AA687',
      ataDate: 'Oct/20/2007',
      ataTime: '18:10',
      atdDate: 'Oct/20/2007',
      atdTime: '19:04',
      rc: 'RC',
      aircraftNumber: 'N656AA',
      rc2Date: 'Oct/20/2007',
      rc2Time: '18:10',
      rc3Date: 'Oct/20/2007',
      rc3Time: '19:04',
      partyBilling: 'AAL'
    },
    {
      flightNumber: 'AA1375',
      ataDate: 'Oct/20/2007',
      ataTime: '17:23',
      atdDate: 'Oct/20/2007',
      atdTime: '19:30',
      rc: 'RC',
      aircraftNumber: 'N696AN',
      rc2Date: 'Oct/20/2007',
      rc2Time: '17:23',
      rc3Date: 'Oct/20/2007',
      rc3Time: '19:30',
      partyBilling: 'AAL'
    },
    {
      flightNumber: 'AA667',
      ataDate: 'Oct/20/2007',
      ataTime: '20:23',
      atdDate: 'Oct/20/2007',
      atdTime: '21:40',
      rc: 'RC',
      aircraftNumber: 'N626AA',
      rc2Date: 'Oct/20/2007',
      rc2Time: '20:23',
      rc3Date: 'Oct/20/2007',
      rc3Time: '21:40',
      partyBilling: 'AAL'
    }
  ]
};

const PDFGenerator = () => {
  const [reportData, setReportData] = useState(sampleReportData);
  const [isLoading, setIsLoading] = useState(false);

  const generatePDF = () => {
    setIsLoading(true);
    // In a real app, you might fetch data here
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Flight Charges PDF Report Generator</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="preview">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="download">Download</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="mt-4">
            <div className="border rounded-md p-2 h-[600px] overflow-auto">
              <PDFViewer width="100%" height="580">
                <PDFDocument reportData={reportData} />
              </PDFViewer>
            </div>
          </TabsContent>
          <TabsContent value="download" className="mt-4">
            <div className="flex flex-col items-center justify-center gap-4 p-8 border rounded-md h-[600px]">
              <div className="text-center">
                <h3 className="text-xl font-medium mb-2">Download PDF Report</h3>
                <p className="text-gray-500 mb-6">Click the button below to download the flight charges report as a PDF file.</p>
                <PDFDownloadLink 
                  document={<PDFDocument reportData={reportData} />} 
                  fileName="flight-charges-report.pdf"
                  className="inline-block"
                >
                  {({ blob, url, loading, error }) => (
                    <Button 
                      size="lg" 
                      disabled={loading}
                    >
                      {loading ? 'Preparing document...' : 'Download PDF'}
                    </Button>
                  )}
                </PDFDownloadLink>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => window.location.reload()}>
          Reset
        </Button>
        <Button onClick={generatePDF} disabled={isLoading}>
          {isLoading ? 'Generating...' : 'Regenerate Report'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PDFGenerator;
