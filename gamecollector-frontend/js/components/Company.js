export default function Company(company) {
    return `
        <ul id="tags">
            ${company.map(company => {
                return `
                    <li class="tag">${company.companyName}</li>
                `;
            }).join('')}
        </ul>
        
        `} 