import { Router } from "express"
import { getPeople } from "../controllers/people/index"

const router: Router = Router()

router.get("/people", getPeople)

export default router