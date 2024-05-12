/* https://mchayapol.medium.com/thai-font-%E0%B9%83%E0%B8%99-react-pdf-48049c9d54a5 */

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Font,
} from "@react-pdf/renderer";

Font.register({
  family: "IBMPlexSansThaiLooped-Regular",
  src: "./src/assets/IBMPlexSansThaiLooped-Regular.ttf",
});

Font.register({
  family: "IBMPlexSansThaiLooped-Bold",
  src: "./src/assets/IBMPlexSansThaiLooped-Bold.ttf",
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#F6F5F2",
  },
  section: {
    margin: 3,
    padding: 3,
    flexGrow: 1,
  },
  hr: {
    marginTop: 2,
    marginBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    borderBottomStyle: "solid",
  },
  textBackground: {
    backgroundColor: "#F3D0D7",
    padding: 5,
    borderRadius: 2,
  },
});

/* 8 cm = 8 * 28.35 points */
/* 5 cm = 5 * 28.35 points */

const data = [
  {
    Name: "ร้านยาใจคนจน",
    Address:
      "555/253 บริทาเนีย อมตะ-พานทอง หมู่2 ต.บ้านเก่า อ.พานทอง ชลบุรี 20160",
    Customer: "นาย ไมค์ ภิรมย์พร",
    Medicine: "พาราเซตามอล 500",
    CommonName: "ม่ายรู้ๆๆๆ",
    DrugStrength: "แรงมากกก",
    Issue: "12 พฤษภาคม 2567",
    Expired: "12 พฤษภาคม 2568",
    Qty: "10",
    Unit: "เม็ด",
    Instruction:
      "ทานครั้งละ 1 เม็ด | วันละ 4 ครั้ง\nหลังอาหารทันที เช้า-กลางวัน-เย็น-ก่อนนอน",
    Description: "แก้ปวด ลดไข้",
    Remark: "-",
    Pharmasict: "นสภ.กชกร เหมือนชาติ",
  },
  {
    Name: "ร้านยาใจคนจน",
    Address:
      "555/253 บริทาเนีย อมตะ-พานทอง หมู่2 ต.บ้านเก่า อ.พานทอง ชลบุรี 20160",
    Customer: "นาย ไมค์ ภิรมย์พร",
    Medicine: "ยาหม่องตาถ้วยทอง",
    CommonName: "หม่อง",
    DrugStrength: "-",
    Issue: "-",
    Expired: "-",
    Qty: "1",
    Unit: "กล่อง",
    Instruction: "ทาบริเวณ ที่มีแมลง สัตว์ กัดต่อย",
    Description: "ยาทา ภายนอกห้ามรับประทาน",
    Remark: "-",
    Pharmasict: "นสภ.กชกร เหมือนชาติ",
  },
  {
    Name: "ร้านยาใจคนจน",
    Address:
      "555/253 บริทาเนีย อมตะ-พานทอง หมู่2 ต.บ้านเก่า อ.พานทอง ชลบุรี 20160",
    Customer: "นาย ไมค์ ภิรมย์พร",
    Medicine: "ยานัดหมอมี",
    CommonName: "-",
    DrugStrength: "-",
    Issue: "-",
    Expired: "-",
    Qty: "5",
    Unit: "ชิ้น",
    Instruction: "ใช้สูดดมเมื่อ มีอาการคัดจมูก",
    Description: "แก้ฝี แก้หิด",
    Remark: "ถ้ายานัดหมอชิด แก้หิด แก้ฝี",
    Pharmasict: "นสภ.กชกร เหมือนชาติ",
  },
];

const PrintTag = () => {
  return (
    <PDFViewer 
        style={{ width: "100%", height: "100vh"}}
    >
        <Document title="Hello World">
            {data.map((text, index) => (
            <Page
                size={{ width: 8 * 28.35, height: 5 * 28.35 }}
                style={styles.page}
                key={index}
            >
                <View style={styles.section}>
                <Text
                    style={{
                        fontSize: 8,
                    fontFamily: "IBMPlexSansThaiLooped-Regular",
                    }}
                >
                    {text.Name}
                </Text>
                <Text
                    style={{
                        fontSize: 6,
                        fontFamily: "IBMPlexSansThaiLooped-Regular",
                    }}
                >
                    {text.Address}
                </Text>
                <Text
                    style={{
                        fontSize: 6,
                        fontFamily: "IBMPlexSansThaiLooped-Bold",
                    }}
                >
                    ลูกค้า : {text.Customer}
                </Text>
                <View style={styles.hr} />
                <Text
                    style={{
                        fontSize: 6,
                        fontFamily: "IBMPlexSansThaiLooped-Regular",
                    }}
                >
                    ชื่อยา : {text.Medicine} {"       "} จำนวน : {text.Qty}{" "}{text.Unit}
              </Text>
              <Text
                style={{
                  fontSize: 4,
                  fontFamily: "IBMPlexSansThaiLooped-Regular",
                }}
              >
                ชื่อสามัญ : {text.CommonName} &emsp; ความแรง :{" "}
                {text.DrugStrength}
              </Text>
              <Text
                style={{
                  fontSize: 5,
                  fontFamily: "IBMPlexSansThaiLooped-Regular",
                }}
              >
                วันที่จ่ายยา : {text.Issue} &#9;&#9; วันหมดอายุ : {text.Expired}
              </Text>
              <View style={styles.textBackground}>
                <Text
                  style={{
                    fontSize: 6,
                    fontFamily: "IBMPlexSansThaiLooped-Bold",
                    //   color: 'red'
                  }}
                >
                  วิธีการใช้ยา
                </Text>
                <Text
                  style={{
                    fontSize: 5,
                    fontFamily: "IBMPlexSansThaiLooped-Regular",
                  }}
                >
                  {text.Instruction}
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 5,
                  fontFamily: "IBMPlexSansThaiLooped-Regular",
                }}
              >
                ข้อบ่งใช้ : {text.Description}
              </Text>
              <Text
                style={{
                  fontSize: 5,
                  fontFamily: "IBMPlexSansThaiLooped-Regular",
                }}
              >
                หมายเหตุ : {text.Remark}
              </Text>
              <Text
                style={{
                  fontSize: 5,
                  fontFamily: "IBMPlexSansThaiLooped-Regular",
                }}
              >
                เภสัชกร : {text.Pharmasict}
              </Text>
            </View>
          </Page>
        ))}
      </Document>
    </PDFViewer>
  );
};

export default PrintTag;
