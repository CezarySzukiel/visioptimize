import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";
import emailjs from "emailjs-com";
import { useTheme } from "@mui/material/styles";

interface IFormInput {
  name: string;
  email: string;
  message: string;
  company: string;
}

function ContactForm() {
  const theme = useTheme();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInput>();
  const textFieldSX = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: theme.palette.primary.main, // Set background color
      color: "gray",
      "& fieldset": {
        borderColor: "gray",
      },
      "&:hover fieldset": {
        borderColor: theme.palette.secondary.light,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.secondary.light,
        borderWidth: "2px",
      },
      "&.Mui-focused": {
        backgroundColor: theme.palette.primary.main,
      },
      "&.MuiInputBase-input": {
        backgroundColor: theme.palette.primary.main,
      },
    },
  };
  const onSubmit = (data: any) => {
    emailjs
      .send("service_odx5hvu", "template_zi0cz6d", data, "Nm0WEs6_AFiKC5usf")
      .then((response) => {})
      .catch((error) => {
        console.error("Błąd przy wysyłaniu emaila", error);
      });
  };

  return (
    <Box
      sx={{
        borderTop: `1px solid ${theme.palette.secondary.light}`,
        margin: "5rem 8rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: 800,
        }}
      >
        <Typography
          variant="h4"
          marginTop={"2rem"}
          component="h1"
          align="center"
          gutterBottom
        >
          Skontaktuj się z nami
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ margin: "0 1rem" }}>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{ required: "To pole jest wymagane" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  color="info"
                  label="Imię"
                  variant="outlined"
                  fullWidth
                  error={!!errors.name}
                  helperText={errors.name ? errors.name.message : ""}
                  sx={textFieldSX}
                />
              )}
            />

            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: "To pole jest wymagane",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Wprowadź prawidłowy adres email",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin={"dense"}
                  color="info"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : ""}
                  sx={textFieldSX}
                />
              )}
            />
            <Controller
              name="company"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  margin={"dense"}
                  color="info"
                  label="Nazwa i Adres Firmy (opcjonalnie)"
                  variant="outlined"
                  fullWidth
                  sx={textFieldSX}
                />
              )}
            />
          </Box>
          <Controller
            name="message"
            control={control}
            defaultValue=""
            rules={{ required: "To pole jest wymagane" }}
            render={({ field }) => (
              <TextField
                {...field}
                color="info"
                label="Wiadomość"
                variant="outlined"
                multiline
                rows={7}
                fullWidth
                error={!!errors.message}
                helperText={errors.message ? errors.message.message : ""}
                sx={textFieldSX}
              />
            )}
          />
        </Box>

        <Button type="submit" variant="contained" color="secondary" fullWidth>
          Wyślij
        </Button>
      </Box>
    </Box>
  );
}

export default ContactForm;
