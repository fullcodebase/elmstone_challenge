import { readFile } from "fs/promises";
import { join } from "path";

export async function getSortedBirdsData(){
    console.log( process.cwd())
    const dataPath = join( process.cwd(), 'public', 'data.json' )

  const buffer = await readFile(dataPath)
  const data = buffer.toString()
  let jsonData = JSON.parse(data)

  jsonData.sort( (a, b)=>{
    return a.name.localeCompare(b.name)
  } )
  return jsonData

}