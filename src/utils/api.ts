export async  function api(uri: string){
  const res = await fetch(uri)
  return res.json()
}