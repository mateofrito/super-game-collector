export default function CompanyOptions(gameconsoles) {
    return (gameconsoles.map(gameconsole => {
            return `   
            <option value=${gameconsole.id}>${gameconsole.name}</option>    
            `
        })
        .join(""))
}