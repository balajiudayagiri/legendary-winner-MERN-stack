import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import { useSelector } from "react-redux";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function About() {
  const data = useSelector((state) => state.fetchedData);
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <div id="aboutpagemaindiv">
        <Box sx={{ width: "100%", maxWidth: 500 }}>
          <Typography variant="h3" gutterBottom>
            About Us
          </Typography>
        </Box>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Introduction</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              AwesomeStore is a one stop shop for all your fashion and lifestyle
              needs. Being India's largest e-commerce store for fashion and
              lifestyle products, AwesomeStore aims at providing a hassle free
              and enjoyable shopping experience to shoppers across the country
              with the widest range of brands and products on its portal. The
              brand is making a conscious effort to bring the power of fashion
              to shoppers with an array of the latest and trendiest products
              available in the country
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Value proposition</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              AwesomeStore's value proposition revolves around giving consumers
              the power and ease of purchasing fashion and lifestyle products
              online. Offerings such as the largest in-season product catalogue,
              100% authentic products, cash on delivery and 30 day return policy
              make AwesomeStore, the preferred shopping destination in the
              country. To make online shopping easier for you, a dedicated
              customer connect team is on standby to answer your queries 24x7..
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Brands</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              AwesomeStore understands its shoppers' needs and caters to them
              with choice of apparel, accessories, cosmetics and footwear from
              over 500 leading Indian and international brands.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <Grid container spacing={1}>
        {data
          .filter((item, index) => (index + 1) % 2 === 0)
          .map((item) => (
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.product_name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.productDetails.Description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
          ))}
      </Grid>
    </>
  );
}
