import express, { Express } from "express"
import cors from "cors"
import peopleRoutes from "./routes"

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(peopleRoutes)

app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )

export default app;