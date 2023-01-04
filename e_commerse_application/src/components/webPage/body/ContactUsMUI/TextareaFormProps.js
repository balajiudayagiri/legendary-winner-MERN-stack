import * as React from "react";
import "./TabsVertical.css";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Textarea from "@mui/joy/Textarea";

export default function TextareaFormProps() {
  return (
    <Box
      sx={{
        py: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        flexWrap: "wrap",
      }}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}>
        <Textarea
          placeholder="Enter your query here"
          sx={{ mb: 1, width: 450 }}
        />
        <Textarea
          placeholder="send message briefly about the query"
          required
          sx={{ mb: 1, height: 150 }}
        />
        <Button type="submit" className="submitBtn" sx={{ color: "#fff" }}>
          Submit
        </Button>
      </form>
    </Box>
  );
}
