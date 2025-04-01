import React from 'react';
import { 
  Document, 
  Page, 
  Text, 
  View, 
  StyleSheet, 
  Font 
} from '@react-pdf/renderer';

// Define styles for PDF document
const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#FFFFFF',
  },
  section: {
    margin: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    borderBottom: '1px solid #ccc',
    paddingBottom: 10,
  },
  subHeader: {
    fontSize: 12,
    textAlign: 'right',
    fontStyle: 'italic',
  },
  text: {
    fontSize: 10,
    marginBottom: 5,
  },
  tableContainer: {
    marginTop: 10,
    borderTop: '1px solid #ccc',
    borderBottom: '1px solid #ccc',
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#f3f3f3',
    padding: 5,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 5,
  },
  tableSubRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    padding: 5,
    backgroundColor: '#f9f9f9',
  },
  tableHeaderCell: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  tableCell: {
    fontSize: 10,
  },
  billingInfo: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  billingLabel: {
    width: 120,
    fontSize: 10,
    fontWeight: 'bold',
  },
  billingValue: {
    fontSize: 10,
  },
  periodInfo: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  periodLabel: {
    width: 120,
    fontSize: 10,
    fontWeight: 'bold',
  },
  periodValue: {
    fontSize: 10,
    width: 120,
  },
  col10: { width: '10%' },
  col15: { width: '15%' },
  col20: { width: '20%' },
  col25: { width: '25%' },
  col30: { width: '30%' },
  col5: { width: '5%' },
  checkbox: {
    width: 10,
    height: 10,
    border: '1px solid #000',
    marginRight: 5,
    position: 'relative',
  },
  checkmark: {
    position: 'absolute',
    top: -1,
    left: 1,
    fontSize: 7,
    fontWeight: 'bold',
  }
});

// PDF Document Component
const PDFDocument = ({ reportData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.section}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.header}>Events used in Period</Text>
          <View>
            <Text style={styles.subHeader}>Page {reportData.pageInfo.current} of {reportData.pageInfo.total}</Text>
            <Text style={styles.subHeader}>{reportData.pageInfo.date}</Text>
          </View>
        </View>
        
        {/* Billing Information */}
        <View style={styles.billingInfo}>
          <Text style={styles.billingLabel}>Billing Run:</Text>
          <Text style={styles.billingValue}>{reportData.billingRun}</Text>
        </View>
        
        {/* Period Information */}
        <View style={styles.periodInfo}>
          <Text style={styles.periodLabel}>Period</Text>
          <Text style={styles.periodValue}>From</Text>
          <Text style={styles.periodValue}>{reportData.period.from}</Text>
          <Text style={styles.periodValue}>Until</Text>
          <Text style={styles.periodValue}>{reportData.period.until}</Text>
          <Text style={styles.periodValue}>Status</Text>
          <Text style={styles.periodValue}>{reportData.period.status}</Text>
        </View>
        
        {/* Date Information */}
        <View style={styles.periodInfo}>
          <Text style={styles.periodLabel}>Date:</Text>
          <Text style={styles.periodValue}>{reportData.date}</Text>
        </View>
        
        {/* Flight Table */}
        <View style={styles.tableContainer}>
          {/* Table Header */}
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeaderCell, styles.col10]}>Flight</Text>
            <Text style={[styles.tableHeaderCell, styles.col15]}>ATA</Text>
            <Text style={[styles.tableHeaderCell, styles.col15]}>ATD</Text>
            <Text style={[styles.tableHeaderCell, styles.col20]}>AircraftType</Text>
            <Text style={[styles.tableHeaderCell, styles.col20]}>Link Flight</Text>
            <Text style={[styles.tableHeaderCell, styles.col10]}>Party Billing</Text>
            <Text style={[styles.tableHeaderCell, styles.col10]}>Private</Text>
          </View>
          
          {/* Table Rows */}
          {reportData.flights.map((flight, index) => (
            <React.Fragment key={index}>
              <View style={styles.tableRow}>
                <Text style={[styles.tableCell, styles.col10]}>{flight.flightNumber}</Text>
                <Text style={[styles.tableCell, styles.col15]}>{flight.ataDate} {flight.ataTime}</Text>
                <Text style={[styles.tableCell, styles.col15]}>{flight.atdDate} {flight.atdTime}</Text>
                <Text style={[styles.tableCell, styles.col20]}></Text>
                <Text style={[styles.tableCell, styles.col20]}></Text>
                <Text style={[styles.tableCell, styles.col10]}>{flight.partyBilling}</Text>
                <View style={[styles.col10, { alignItems: 'center' }]}>
                  <View style={styles.checkbox}>
                    <Text style={styles.checkmark}>✓</Text>
                  </View>
                </View>
              </View>
              <View style={styles.tableSubRow}>
                <Text style={[styles.tableCell, styles.col10]}>{flight.rc}</Text>
                <Text style={[styles.tableCell, styles.col15]}>{flight.aircraftNumber}</Text>
                <Text style={[styles.tableCell, styles.col15]}></Text>
                <Text style={[styles.tableCell, styles.col20]}>{flight.rc2Date} {flight.rc2Time}</Text>
                <Text style={[styles.tableCell, styles.col20]}>{flight.rc3Date} {flight.rc3Time}</Text>
                <Text style={[styles.tableCell, styles.col10]}></Text>
                <Text style={[styles.tableCell, styles.col10]}></Text>
              </View>
            </React.Fragment>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default PDFDocument;
