import { Box, Button, Grid, LinearProgress, Typography } from "@mui/material";
import React from "react";
import Dashboard from "./Dashboard";
import trophy from "../.././assets/trophy.png";
import MovingIcon from "@mui/icons-material/Moving";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import InventoryIcon from "@mui/icons-material/Inventory";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Logo from "../.././assets/logo.png";
import LogoAviato from "../.././assets/aviato.png";
import Logobank from "../.././assets/bitbank.png";
import HelpIcon from "@mui/icons-material/Help";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import { CommmonGrid } from "./CommmonGrid";
import stripe from "../.././assets/stripe.png";
import slack from "../.././assets/slack.png";
import MasterCard from "../.././assets/mastercard.png";
import digital from "../.././assets/digital.png";
import github from "../.././assets/github.png";
import american from "../.././assets/american.png";
import gumroad from "../.././assets/gumroad.png";
import google from "../.././assets/google.png";
import ApexChart from "../../components/ApexCharts/ApexChart";
import EnhancedTable from "../../components/table/Table";
import { useTranslation } from "react-i18next";
export const DashboardContent = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid
            sx={{
              padding: "20px",
              backgroundColor: "white",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
              borderRadius: "10px",
            }}
            item
            xs={4}
            md={4}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "gray" }}
            >
              {/* Congratulations John! 🥳 */}
              {t("thanks.1")}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "gray", fontSize: "12px" }}
            >
              {t("thanks.0")}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ marginTop: "5px" }}>
                <Typography variant="h6" sx={{ color: "purple" }}>
                  $42.8k
                </Typography>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    marginTop: "10px",
                    fontSize: "10px",
                    fontWeight: "bold",
                    backgroundColor: "purple",
                  }}
                >
                  View sales
                </Button>
              </Box>
              <img style={{ height: "80px", width: "60px" }} src={trophy} />
            </Box>
          </Grid>
          <Grid
            item
            xs={7}
            md={7}
            sx={{
              padding: "20px",
              backgroundColor: "white",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
              borderRadius: "10px",
              ml: 3,
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "gray" }}
            >
              {/* Statistics Card */}
              {t("thanks.2")}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "gray", fontSize: "12px", mt: 1 }}
            >
              {t("thanks.8")}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <Box
                sx={{
                  mt: 4,
                  display: "flex",
                  gap: "5px",
                }}
              >
                <MovingIcon
                  size="large"
                  sx={{
                    backgroundColor: "purple",
                    color: "white",
                    borderRadius: "5px",
                    fontSize: "35px",
                  }}
                />
                <Box>
                  <Typography variant="body2" sx={{ fontSize: "10px" }}>
                    sales
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    245K
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  mt: 4,
                  display: "flex",
                  gap: "5px",
                }}
              >
                <PersonOutlineIcon
                  sx={{
                    backgroundColor: "green",
                    color: "white",
                    borderRadius: "5px",
                    fontSize: "35px",
                  }}
                />
                <Box>
                  <Typography variant="body2" sx={{ fontSize: "10px" }}>
                    Customers
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    12k
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  mt: 4,
                  display: "flex",
                  gap: "5px",
                }}
              >
                <InventoryIcon
                  sx={{
                    backgroundColor: "yellow",
                    color: "white",
                    borderRadius: "5px",
                    fontSize: "35px",
                  }}
                />
                <Box>
                  <Typography variant="body2" sx={{ fontSize: "10px" }}>
                    Products
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    1.54k
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  mt: 4,
                  display: "flex",
                  gap: "5px",
                }}
              >
                <AttachMoneyIcon
                  sx={{
                    backgroundColor: "blue",
                    color: "white",
                    borderRadius: "5px",
                    fontSize: "35px",
                  }}
                />
                <Box>
                  <Typography variant="body2" sx={{ fontSize: "10px" }}>
                    revenue
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    88k
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Grid2 2nd row */}

      <Box sx={{ flexGrow: 1, mt: 3 }}>
        <Grid container spacing={1}>
          <Grid
            item
            xs={4}
            sx={{
              padding: "20px",
              backgroundColor: "white",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
              borderRadius: "10px",
            }}
          >
            <ApexChart />
          </Grid>
          <Grid
            sx={{
              padding: "20px",
              backgroundColor: "white",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
              borderRadius: "10px",
              ml: 3,
            }}
            item
            xs={3}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "gray" }}
            >
              {/* Total Earning */}

              {t("why.TotalEarning")}
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2 }}>
              $24,895
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "10px" }}>
              Compared to $84,325 last year
            </Typography>
            <Box
              sx={{
                mt: 3,
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  flexGrow: "1",
                }}
              >
                <img src={Logo} style={{ height: "20px", width: "20px" }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {t("why.zipcar")}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "10px" }}>
                    Vuejs, React & HTML
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography variant="body2" sx={{ fontSize: "10px" }}>
                  $24,895.65
                </Typography>
                <LinearProgress sx={{ width: "50px" }} color="secondary" />
              </Box>
            </Box>
            <Box
              sx={{
                mt: 3,
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  flexGrow: "1",
                }}
              >
                <img src={Logobank} style={{ height: "20px", width: "20px" }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {t("why.BitBank")}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "10px" }}>
                    sketch, Figma & XD
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography variant="body2" sx={{ fontSize: "10px" }}>
                  $8,650.20
                </Typography>
                <LinearProgress sx={{ width: "50px" }} color="secondary" />
              </Box>
            </Box>
            <Box
              sx={{
                mt: 3,
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  flexGrow: "1",
                }}
              >
                <img
                  src={LogoAviato}
                  style={{ height: "20px", width: "20px" }}
                />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {t("why.Aviato")}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "10px" }}>
                    HTML & Angular
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography variant="body2" sx={{ fontSize: "10px" }}>
                  $1,245.80
                </Typography>
                <LinearProgress sx={{ width: "50px" }} color="secondary" />
              </Box>
            </Box>
          </Grid>
          {/* <Grid item xs={4}>
            <ApexChart />
          </Grid> */}

          {/* MiniGrid Grid implmentation */}

          <Grid item xs={4}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    padding: "10px",
                    backgroundColor: "white",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                    borderRadius: "10px",
                  }}
                >
                  <Box>
                    <LeaderboardIcon
                      sx={{
                        color: "white",
                        backgroundColor: "green",
                        borderRadius: "20px",
                        fontSize: "30px",
                        padding: "5px",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "bold", mt: "6px" }}
                  >
                    {t("why.Totalprofit")}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", mt: "6px" }}
                  >
                    $25.6k
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "10px", mt: "6px", marginBottom: "7px" }}
                  >
                    Yearly Project
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    padding: "10px",
                    backgroundColor: "white",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                    borderRadius: "10px",
                  }}
                >
                  <Box>
                    <AttachMoneyIcon
                      sx={{
                        color: "white",
                        backgroundColor: "gray",
                        borderRadius: "20px",
                        fontSize: "30px",
                        padding: "5px",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "bold", mt: "9px" }}
                  >
                    {t("why.refund")}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", mt: "6px", mb: "5px" }}
                  >
                    $78
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "10px", mt: "6px", mb: "5px" }}
                  >
                    past month
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    padding: "10px",
                    backgroundColor: "white",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                    borderRadius: "10px",
                    mt: 3,
                  }}
                >
                  <Box>
                    <BusinessCenterIcon
                      sx={{
                        color: "white",
                        backgroundColor: "purple",
                        borderRadius: "20px",
                        fontSize: "30px",
                        padding: "5px",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "bold", mt: "6px" }}
                  >
                    {t("why.newproject")}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", mt: "6px" }}
                  >
                    $868
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "10px", mt: "6px" }}
                  >
                    Yearly Project
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    padding: "10px",
                    backgroundColor: "white",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                    borderRadius: "10px",
                    mt: 3,
                  }}
                >
                  <Box>
                    <HelpIcon
                      sx={{
                        color: "white",
                        backgroundColor: "yellow",
                        borderRadius: "20px",
                        fontSize: "30px",
                        padding: "5px",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "bold", mt: "6px" }}
                  >
                    {t("why.SalesQueries")}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", mt: "6px", mb: "5px" }}
                  >
                    15
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "10px", mt: "6px", mb: "5px" }}
                  >
                    Last week
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, mt: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <CommmonGrid
              header={"Sales by countries"}
              message={"8656k"}
              submsg={"USA"}
              footer={"894k"}
              subfooter={"sales"}
              message2={"$2,425k"}
              submsg2={"Uk"}
              footer2={"645k"}
              subfooter2={"sales"}
              message3={"865k"}
              submsg3={"india"}
              footer3={"148k"}
              subfooter3={"sales"}
              message4={"8656k"}
              submsg4={"korea"}
              footer4={"86k"}
              subfooter4={"sales"}
            />
          </Grid>
          <Grid item xs={4}>
            <CommmonGrid
              header={t("deposit.0")}
              img={gumroad}
              message={t("deposit.1")}
              submsg={"sell UI kit"}
              footer={"+$4,650"}
              img2={MasterCard}
              message2={t("deposit.2")}
              submsg2={"Wallet deposit"}
              footer2={"894k"}
              img3={stripe}
              message3={t("deposit.3")}
              submsg3={"ios application"}
              footer3={"894k"}
              img4={american}
              message4={t("deposit.4")}
              submsg4={"bank transfer"}
              footer4={"894k"}
            />
          </Grid>
          <Grid item xs={4}>
            <CommmonGrid
              header={t("withdraw.4")}
              img={google}
              message={t("withdraw.0")}
              submsg={"paypal deposit"}
              footer={"+$4,650"}
              img2={github}
              message2={"Github Enterprise"}
              submsg2={"Security & compliance"}
              footer2={"894k"}
              img3={digital}
              message3={t("withdraw.2")}
              submsg3={"Cloud Hosting"}
              footer3={"894k"}
              img4={slack}
              message4={t("withdraw.3")}
              submsg4={"Debit card deposit"}
              footer4={"894k"}
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={1}
          // rowSpacing={1}
          // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={12}>
            <Box
              sx={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                borderRadius: "10px",
                mt: 2,
              }}
            >
              <EnhancedTable />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
