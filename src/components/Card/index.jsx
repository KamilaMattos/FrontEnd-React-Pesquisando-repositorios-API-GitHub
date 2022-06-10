import { Box, Avatar, Card, CardActionArea, Typography } from "@mui/material"

export const CardRepo = ({ data }) => {
  return (
    <Box
      variant='outlined'
      sx={{
        marginTop: "1em",
        marginBottom: "1em",
        width: "40em",
        height: "10em",
      }}
    >
      <CardActionArea>
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            height: "10em",
            gap: "1em",
          }}
        >
          <Avatar alt={data.full_name} src={data.owner.avatar_url} />
          <a target='_blank' rel='noreferrer' href={data.html_url}>
            <Typography variant='h6'>{data.full_name}</Typography>
          </a>
          <Typography>{data.description}</Typography>
        </Card>
      </CardActionArea>
    </Box>
  )
}
