import { Router, Request, Response } from "express";
import { readFile } from "fs/promises";
import { join } from "path";

import { getSortedBirdsData } from '../../helpers/readData'


const router = Router();

router.get("/", async (req: Request, res: Response) => {
  // Respond with the bird data from /public/data.json sorted in alphabetical order
  // const dataPath = join( process.cwd(), 'public', 'data.json' )

  // const buffer = await readFile(dataPath)
  // const data = buffer.toString()
  // let jsonData = JSON.parse(data)

  // jsonData.sort( (a, b)=>{
  //   return a.name.localeCompare(b.name)
  // } )

  const jsonData = await getSortedBirdsData()
  res.json(jsonData)
});

export default router;
