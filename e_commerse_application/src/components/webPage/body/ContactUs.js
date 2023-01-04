import "./ContactUsMUI/TabsVertical.css";
import "./Contact.css";
import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import PhoneIcon from "@mui/icons-material/Phone";

import TextareaFormProps from "./ContactUsMUI/TextareaFormProps";
import Textarea from "@mui/joy/Textarea";
import Button from "@mui/joy/Button";

export default function ContactUs() {
  return (
    <Tabs
      aria-label="Vertical tabs"
      orientation="vertical"
      defaultValue={0}
      sx={{ minWidth: 1000, minHeight: 480, borderRadius: "lg" }}>
      <TabList>
        <Tab>Contact Us</Tab>
        <Tab>Mail Us</Tab>
        <Tab>Send feedback</Tab>
      </TabList>
      <TabPanel value={0} sx={{ p: 2 }}>
        <Tabs
          aria-label="Basic tabs"
          defaultValue={0}
          sx={{ borderRadius: "lg" }}>
          <TabList>
            <Tab>Chat With AwesomeBot</Tab>
            <Tab>Chat with our Executive</Tab>
            <Tab>Talk with our Executive</Tab>
          </TabList>
          <TabPanel value={0} sx={{ p: 2 }}>
            <b>AwesomeBot</b>
            <TextareaFormProps />
          </TabPanel>
          <TabPanel value={1} sx={{ p: 2 }}>
            <b>chat with our Executive</b>
            <TextareaFormProps />
          </TabPanel>
          <TabPanel value={2} sx={{ p: 2 }}>
            <PhoneIcon />
            <br />
            <b>Contact our Executive</b>
            <br />
            <br />
            <strong>Call : </strong>
            <a href="/" className="anchorecallnumber">
              1800-987654321
            </a>{" "}
            24/7 Banglore
            <br />
            <strong>Call : </strong>
            <a href="/" className="anchorecallnumber">
              1800-987654322
            </a>{" "}
            24/7 pune
            <br />
            <strong>Call : </strong>
            <a href="/" className="anchorecallnumber">
              1800-987654323
            </a>{" "}
            24/7 chennai
          </TabPanel>
        </Tabs>
      </TabPanel>
      <TabPanel value={1} sx={{ p: 2 }}>
        <b>Mail Us</b> here we will get in touch with you soon
        <TextareaFormProps />
      </TabPanel>
      <TabPanel value={2} sx={{ p: 2 }}>
        <b>feedback</b>
        <Textarea
          label="Outlined"
          placeholder="Type in here…"
          variant="outlined"
          sx={{ mb: 1, width: 600, height: 200 }}
        />
        <Button type="submit" className="submitBtn" sx={{ color: "#fff" }}>
          Submit
        </Button>
      </TabPanel>
    </Tabs>
  );
}
