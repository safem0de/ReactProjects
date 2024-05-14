import {
  Document,
  Font,
  Image,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

Font.register({
  family: "IBMPlexSansThaiLooped-Regular",
  src: "./src/assets/IBMPlexSansThaiLooped-Regular.ttf",
});

Font.register({
  family: "IBMPlexSansThaiLooped-Bold",
  src: "./src/assets/IBMPlexSansThaiLooped-Bold.ttf",
});

const company_data = {
  Name: "นาย ไมค์ ภิรมย์พร",
  Address1: "555/253 หมู่2 หมู่บ้าน บริทาเนีย อมตะ-พานทอง",
  Address2: "ต.บ้านเก่า อ.พานทอง จ.ชลบุรี 20160",
  tax_id: "1100123456789",
  phoneNo: "0876946949",
};

const customer_data = {
  Name: "นาย ไมค์ ภิรมย์พร",
  Address1: "555/253 หมู่2 หมู่บ้าน บริทาเนีย อมตะ-พานทอง",
  Address2: "ต.บ้านเก่า อ.พานทอง จ.ชลบุรี 20160",
  tax_id: "1100123456789",
};

const invoice_data = {
  id: "INV202405120001",
  invoice_date: "12 พฤษภาคม 2567",
  payment_date: "11 มิถุนายน 2567",
  credit_term: "30 วัน",
  vat_percent: 7,
  cashier: "นาย สันดอน นอนดึก",
  cust_name: "นาย กบ โอปโอป",
  cust_phoneNo: "0877881234",
  cust_email: "test@gmail.com",
  cart: [
    {
      id: 1,
      productName: "พาราเซตามอล 500",
      qty: 999,
      price: 30.5,
    },
    {
      id: 2,
      productName: "ยาหม่องตาถ้วยทอง",
      qty: 100,
      price: 40,
    },
    {
      id: 3,
      productName: "ยานัดหมอมี",
      qty: 50,
      price: 25,
    },
    {
      id: 3,
      productName: "ยานัดหมอมี",
      qty: 50,
      price: 25,
    },
    {
      id: 3,
      productName: "ยานัดหมอมี",
      qty: 50,
      price: 25,
    },
    {
      id: 3,
      productName: "ยานัดหมอมี",
      qty: 50,
      price: 25,
    },
    {
      id: 3,
      productName: "ยานัดหมอมี",
      qty: 50,
      price: 25,
    },
    {
      id: 3,
      productName: "ยานัดหมอมี",
      qty: 50,
      price: 25,
    },
    {
      id: 3,
      productName: "ยานัดหมอมี",
      qty: 50,
      price: 25,
    },
    {
      id: 3,
      productName: "ยานัดหมอมี",
      qty: 50,
      price: 25,
    },
  ],
};

const styles = StyleSheet.create({
  br: {
    width: "100%",
    padding: 5,
  },
  hr: {
    marginTop: 2,
    marginBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    borderBottomStyle: "solid",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 0,
  },
  leftBox: {
    width: "50%",
    marginRight: 10, // Space between boxes
    padding: 0,
    // backgroundColor: "#f0f0f0",
  },
  rightBox: {
    width: "50%",
    padding: 0,
    // backgroundColor: "#f0f0f0",
  },
  rightBox_label: {
    width: "30%",
    paddingLeft: 10,
    textAlign: "left",
    fontSize: 12,
    fontFamily: "IBMPlexSansThaiLooped-Regular",
  },
  rightBox_value: {
    width: "70%",
    paddingLeft: 10,
    textAlign: "left",
    fontSize: 12,
    fontFamily: "IBMPlexSansThaiLooped-Regular",
  },
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 18,
    fontFamily: "IBMPlexSansThaiLooped-Bold",
  },
  image: {
    width: 60,
    height: 60,
  },
  title: {
    fontSize: 12,
    fontFamily: "IBMPlexSansThaiLooped-Regular",
    textAlign: "right",
  },
  address: {
    marginTop: 10,
    fontSize: 12,
  },
  row: {
    flexDirection: "row",
    marginTop: 3,
    marginBottom: 3,
  },
  no: {
    width: "5%",
    textAlign: "left",
    fontSize: 12,
  },
  description: {
    width: "35%",
    textAlign: "left",
    fontSize: 12,
  },
  quantity: {
    width: "20%",
    textAlign: "right",
    fontSize: 12,
  },
  price: {
    width: "20%",
    textAlign: "right",
    fontSize: 12,
  },
  amount: {
    width: "20%",
    textAlign: "right",
    fontSize: 12,
  },
  total: {
    fontSize: 12,
    textAlign: "right",
    marginTop: 10,
    paddingTop: 10,
    borderTop: 1,
    borderTopColor: "#000000",
    borderTopStyle: "solid",
  },
  footer: {
    position: "absolute",
    bottom: 5,
    left: 0,
    right: 0,
    padding: 24,
    textAlign: "center",
    fontSize: 12,
  },
  footer_element: {
    textAlign: "center",
    fontSize: 10,
    paddingX: 10,
    fontFamily: "IBMPlexSansThaiLooped-Regular",
    // backgroundColor: "red",
  },
});

const LeftBox = ({ company_data, customer_data }) => (
  <View style={styles.leftBox}>
    <Image style={styles.image} src="./src/assets/pharma_logo.jpeg" />
    <Text style={{ fontSize: 12, fontFamily: "IBMPlexSansThaiLooped-Regular" }}>
      {company_data.Name}
    </Text>
    <Text style={{ fontSize: 12, fontFamily: "IBMPlexSansThaiLooped-Regular" }}>
      {company_data.Address1}
    </Text>
    <Text style={{ fontSize: 12, fontFamily: "IBMPlexSansThaiLooped-Regular" }}>
      {company_data.Address2}
    </Text>
    <Text style={{ fontSize: 12, fontFamily: "IBMPlexSansThaiLooped-Regular" }}>
      {company_data.tax_id}
    </Text>
    <Text style={{ fontSize: 12, fontFamily: "IBMPlexSansThaiLooped-Regular" }}>
      {company_data.phoneNo}
    </Text>
    <View style={styles.br} />
    <Text style={{ fontSize: 12, fontFamily: "IBMPlexSansThaiLooped-Bold" }}>
      ลูกค้า
    </Text>
    <Text style={{ fontSize: 12, fontFamily: "IBMPlexSansThaiLooped-Regular" }}>
      {customer_data.Name}
    </Text>
    <Text style={{ fontSize: 12, fontFamily: "IBMPlexSansThaiLooped-Regular" }}>
      {customer_data.Address1}
    </Text>
    <Text style={{ fontSize: 12, fontFamily: "IBMPlexSansThaiLooped-Regular" }}>
      {customer_data.Address2}
    </Text>
    <Text style={{ fontSize: 12, fontFamily: "IBMPlexSansThaiLooped-Regular" }}>
      {customer_data.tax_id}
    </Text>
  </View>
);

const RightBoxUpper = ({ invoice_data }) => (
  <>
    <View style={styles.container}>
      <Text style={styles.rightBox_label}>เลขที่ </Text>
      <Text style={styles.rightBox_value}>{invoice_data.id}</Text>
    </View>
    <View style={styles.container}>
      <Text style={styles.rightBox_label}>วันที่ </Text>
      <Text style={styles.rightBox_value}>{invoice_data.invoice_date}</Text>
    </View>
    <View style={styles.container}>
      <Text style={styles.rightBox_label}>เครดิต </Text>
      <Text style={styles.rightBox_value}>{invoice_data.credit_term}</Text>
    </View>
    <View style={styles.container}>
      <Text style={styles.rightBox_label}>ครบกำหนด </Text>
      <Text style={styles.rightBox_value}>{invoice_data.payment_date}</Text>
    </View>
    <View style={styles.container}>
      <Text style={styles.rightBox_label}>ผู้ขาย </Text>
      <Text style={styles.rightBox_value}>{invoice_data.cashier}</Text>
    </View>
  </>
);

const RightBoxLower = ({ invoice_data }) => (
  <>
    <View style={styles.container}>
      <Text style={styles.rightBox_label}>ผู้ติดต่อ </Text>
      <Text style={styles.rightBox_value}>{invoice_data.cust_name}</Text>
    </View>
    <View style={styles.container}>
      <Text style={styles.rightBox_label}>เบอร์โทร </Text>
      <Text style={styles.rightBox_value}>{invoice_data.cust_phoneNo}</Text>
    </View>
    <View style={styles.container}>
      <Text style={styles.rightBox_label}>อีเมล์ </Text>
      <Text style={styles.rightBox_value}>{invoice_data.cust_email}</Text>
    </View>
  </>
);

const LeftRightBox = () => (
  <View style={styles.container}>
    <LeftBox company_data={company_data} customer_data={customer_data} />
    <View style={styles.rightBox}>
      <Text
        style={{
          textAlign: "center",
          fontFamily: "IBMPlexSansThaiLooped-Bold",
        }}
      >
        {""} ใบกำกับภาษี {""}
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontFamily: "IBMPlexSansThaiLooped-Bold",
          fontSize: 10,
        }}
      >
        ต้นฉบับ
      </Text>
      <View style={styles.hr} />
      <RightBoxUpper invoice_data={invoice_data} />
      <View style={styles.hr} />
      <RightBoxLower invoice_data={invoice_data} />
    </View>
  </View>
);

const TableHead = () => (
  <View style={styles.row}>
    <Text style={{ ...styles.no, fontFamily: "IBMPlexSansThaiLooped-Bold" }}>
      #
    </Text>
    <Text
      style={{
        ...styles.description,
        fontFamily: "IBMPlexSansThaiLooped-Bold",
      }}
    >
      รายละเอียด (Description)
    </Text>
    <Text
      style={{ ...styles.quantity, fontFamily: "IBMPlexSansThaiLooped-Bold" }}
    >
      จำนวน (Quantity)
    </Text>
    <Text style={{ ...styles.price, fontFamily: "IBMPlexSansThaiLooped-Bold" }}>
      ราคา (Price)
    </Text>
    <Text
      style={{ ...styles.amount, fontFamily: "IBMPlexSansThaiLooped-Bold" }}
    >
      รวม (Amount)
    </Text>
  </View>
);

const TableBody = ({ cart }) => (
  <>
    {cart.map((item, index) => (
      <View key={index + 1} style={styles.row}>
        <Text
          style={{ ...styles.no, fontFamily: "IBMPlexSansThaiLooped-Regular" }}
        >
          {index + 1}
        </Text>
        <Text
          style={{
            ...styles.description,
            fontFamily: "IBMPlexSansThaiLooped-Regular",
          }}
        >
          {item.productName}
        </Text>
        <Text
          style={{
            ...styles.quantity,
            fontFamily: "IBMPlexSansThaiLooped-Regular",
          }}
        >
          {item.qty.toLocaleString()}
        </Text>
        <Text
          style={{
            ...styles.price,
            fontFamily: "IBMPlexSansThaiLooped-Regular",
          }}
        >
          {(1.0 * item.price.toFixed(2)).toLocaleString()}
        </Text>
        <Text
          style={{
            ...styles.amount,
            fontFamily: "IBMPlexSansThaiLooped-Regular",
          }}
        >
          {(1.0 * (item.price * item.qty).toFixed(2)).toLocaleString()}
        </Text>
      </View>
    ))}
  </>
);

const TableTotal = ({ getText, getNumber }) => (
  <View style={{ ...styles.row, marginRight: "0" }}>
    <Text style={{ ...styles.no, fontFamily: "IBMPlexSansThaiLooped-Regular" }}>
      {" "}
    </Text>
    <Text
      style={{
        ...styles.quantity,
        fontFamily: "IBMPlexSansThaiLooped-Regular",
      }}
    >
      {" "}
    </Text>
    <Text
      style={{ ...styles.price, fontFamily: "IBMPlexSansThaiLooped-Regular" }}
    ></Text>
    <Text
      style={{
        ...styles.description,
        fontFamily: "IBMPlexSansThaiLooped-Regular",
      }}
    >
      {getText}
    </Text>
    <Text
      style={{ ...styles.amount, fontFamily: "IBMPlexSansThaiLooped-Regular" }}
    >
      {getNumber} {"บาท"}
    </Text>
  </View>
);

const ThaiWord = ({ getThaiWord }) => (
  <View style={{ ...styles.row }}>
    <Text style={{ fontSize: 12, fontFamily: "IBMPlexSansThaiLooped-Regular" }}>
      {"("}
      {getThaiWord}
      {")"}
    </Text>
  </View>
);

const Footer = () => (
  <View fixed style={styles.footer}>
    <View style={styles.row}>
      <View style={{ flexDirection: "column", width: "20%" }}>
        <Text>{"_______________"}</Text>
        <Text style={styles.footer_element}>{"ผู้รับสินค้า/บริการ"}</Text>
      </View>
      <View style={{ flexDirection: "column", width: "20%" }}>
        <Text>{"_______________"}</Text>
        <Text style={styles.footer_element}>{"วันที่"}</Text>
      </View>
      <View style={{ flexDirection: "column", width: "20%" }}>
      </View>
      <View style={{ flexDirection: "column", width: "20%" }}>
        <Text>{"_______________"}</Text>
        <Text style={styles.footer_element}>{"ผู้อนุมัติ"}</Text>
      </View>
      <View style={{ flexDirection: "column", width: "20%" }}>
        <Text>{"_______________"}</Text>
        <Text style={styles.footer_element}>{"วันที่"}</Text>
      </View>
    </View>
  </View>
);

const calculateTotal = (cart) => {
  return cart.reduce((total, item) => total + item.qty * item.price, 0);
};

const numberToThaiWords = (number) => {
  const thaiNumbers = [
    "ศูนย์",
    "หนึ่ง",
    "สอง",
    "สาม",
    "สี่",
    "ห้า",
    "หก",
    "เจ็ด",
    "แปด",
    "เก้า",
  ];
  const tens = ["", "สิบ", "ร้อย", "พัน", "หมื่น", "แสน", "ล้าน"];

  if (number === 0) {
    return thaiNumbers[0];
  }

  const parts = number.toString().split(".");
  let integerPart = parseInt(parts[0], 10);
  const decimalPart = parts[1];

  let words = "";
  let position = 0;

  while (integerPart > 0) {
    const digit = integerPart % 10;
    if (digit !== 0) {
      if (position === 1 && digit === 1) {
        words = tens[position] + words;
      } else if (position === 1 && digit === 2) {
        words = "ยี่" + tens[position] + words;
      } else if (position === 0 && digit === 1 && integerPart > 1) {
        words = "เอ็ด" + words;
      } else {
        words = thaiNumbers[digit] + tens[position] + words;
      }
    }
    integerPart = Math.floor(integerPart / 10);
    position++;
  }

  if (decimalPart) {
    words += " จุด ";
    for (let i = 0; i < decimalPart.length; i++) {
      const digit = parseInt(decimalPart[i], 10);
      words += thaiNumbers[digit];
    }
  }

  return words;
};

const PrintFullTaxReceipt = () => {
  // console.log(numberToThaiWords(35719.5));
  // console.log((1234567.89).toLocaleString());

  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <Document title={invoice_data.id}>
        <Page size="A4" style={styles.page}>
          <LeftRightBox />
          <View style={styles.br} />
          <TableHead />
          <View style={styles.hr} />
          <TableBody cart={invoice_data.cart} />
          <View style={styles.hr} />
          <TableTotal
            getText={"รวมทั้งสิ้น (Total)"}
            getNumber={(
              calculateTotal(invoice_data.cart) * (1.0).toFixed(2)
            ).toLocaleString()}
          />
          <TableTotal
            getText={`ภาษีมูลค่าเพิ่ม ${invoice_data.vat_percent}%`}
            getNumber={(
              calculateTotal(invoice_data.cart) *
              (invoice_data.vat_percent / 100).toFixed(2)
            ).toLocaleString()}
          />
          <TableTotal
            getText={`ราคาไม่รวมภาษีมูลค่าเพิ่ม`}
            getNumber={(
              calculateTotal(invoice_data.cart) -
              (
                calculateTotal(invoice_data.cart) *
                (invoice_data.vat_percent / 100)
              ).toFixed(2)
            ).toLocaleString()}
          />
          <TableTotal
            getText={"จำนวนเงินรวมทั้งสิ้น (Total)"}
            getNumber={(
              calculateTotal(invoice_data.cart) * (1.0).toFixed(2)
            ).toLocaleString()}
          />
          <ThaiWord
            getThaiWord={`${numberToThaiWords(
              Math.round(calculateTotal(invoice_data.cart))
            )}บาทถ้วน`}
          />
          <Footer />
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PrintFullTaxReceipt;
