import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { TextField, Button, Box, FormControl } from "@mui/material"
import { CardRepo } from "../Card"

export const Search = () => {
  const [repo, setRepo] = useState([])

  const schema = yup.object().shape({
    repositorie: yup.string().required("Campo obrigatório"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmitForm = (data) => {
    axios
      .get(`https://api.github.com/repos/${data.repositorie}`)
      .then((response) => {
        setRepo([...repo, response])
      })
      .catch((error) => console.log(error))
  }

  return (
    <>
      <FormControl margin='normal'>
        <TextField
          fullWidth
          type='text'
          variant='outlined'
          label='Digite sua pesquisa'
          {...register("repositorie")}
          helperText={errors.repositorie?.message}
          error={!!errors.repositorie}
          required
        />
      </FormControl>
      <Button
        onClick={handleSubmit(onSubmitForm)}
        sx={{ margin: "1.5em" }}
        type='submit'
        variant='contained'
        size='large'
      >
        Pesquisar
      </Button>
      <Box>
        {repo && repo.map(({ data }) => <CardRepo data={data} key={data.id} />)}
      </Box>
    </>
  )
}
