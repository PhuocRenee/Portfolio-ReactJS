import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Typography,
  TextField,
  Button,
  styled,
  Grid,
  Container,
} from "@mui/material";

const schema = yup
  .object({
    firstName: yup
      .string()
      .min(3, "Please, enter a valid name")
      .max(20)
      .required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
  })
  .required();

const CustomTextField = styled(TextField)(({ theme }) => ({
  width: "80%",
  border: "2px",
  borderRadius: 10,
  margin: 1,
  backgroundColor: theme.palette.third.main,
  "& label": {
    marginLeft: "2%",
  },
  "& input": {
    marginLeft: "2%",
  },
  "& textArea": {
    marginLeft: "2%",
  },
}));

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // const port = process.env.PORT || 4000;

  const [mailerState, setMailerState] = useState({
    firstName: "",
    email: "",
    message: "",
  });

  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const submitEmail = async (e) => {
    // e.preventDefault();
    console.log({ mailerState });
    await fetch(`/send`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        accepts: "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          alert("Message Sent");
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      })
      .then(() => {
        setMailerState({
          email: "",
          firstName: "",
          message: "",
        });
      });
  };

  return (
    <section id="Contact">
      <Container variant="section-dark">
        <Grid
          container
          spacing={0}
          direction="column"
          sx={{ alignItems: "center" }}
          justify="center"
          component="form"
          autoComplete="off"
          onSubmit={handleSubmit(submitEmail)}
        >
          <Typography variant="h5" gutterBottom>
            CONTACT US
          </Typography>
          <br />
          <CustomTextField
            {...register("firstName")}
            label="NAME"
            type="text"
            placeholder="Name"
            onChange={handleStateChange}
            name="firstName"
            value={mailerState.firstName}
            required
            fullWidth
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}

            //   error={true}
          ></CustomTextField>
          <Typography variant="body2" color="second" component="h2">
            {errors.firstName?.message}
          </Typography>
          <br />
          <CustomTextField
            {...register("email")}
            label="EMAIL"
            type="text"
            placeholder="Email"
            onChange={handleStateChange}
            name="email"
            value={mailerState.email}
            required
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
          ></CustomTextField>
          <Typography variant="body2" color="second" component="h2">
            {errors.email?.message}
          </Typography>
          <br />
          <CustomTextField
            {...register("message")}
            backgroundcolor="second"
            label="YOUR MESSAGE"
            type="text"
            placeholder="Message"
            onChange={handleStateChange}
            name="message"
            multiline
            rows={4}
            required
            value={mailerState.message}
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
          ></CustomTextField>
          <Typography variant="body2" color="second" component="h2">
            {errors.message?.message}
          </Typography>
          <br />
          <Button
            type="submit"
            color="second"
            variant="contained"
            sx={{ borderRadius: 3, margin: 1 }}
          >
            Send Message
          </Button>
        </Grid>
      </Container>
    </section>
  );
}
