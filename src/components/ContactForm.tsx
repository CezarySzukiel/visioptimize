import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { TextField, Button, Box, Typography } from "@mui/material";
import emailjs from "emailjs-com";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

function ContactForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInput>();

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
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 500,
        margin: "0 auto",
      }}
    >
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Skontaktuj się z nami
      </Typography>

      <Controller
        name="name"
        control={control}
        defaultValue=""
        rules={{ required: "To pole jest wymagane" }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Imię"
            variant="outlined"
            fullWidth
            error={!!errors.name}
            helperText={errors.name ? errors.name.message : ""}
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
            label="Email"
            variant="outlined"
            fullWidth
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ""}
          />
        )}
      />

      <Controller
        name="message"
        control={control}
        defaultValue=""
        rules={{ required: "To pole jest wymagane" }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Wiadomość"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            error={!!errors.message}
            helperText={errors.message ? errors.message.message : ""}
          />
        )}
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Wyślij
      </Button>
    </Box>
  );
}

export default ContactForm;
