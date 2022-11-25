
let tbody = document.getElementById("tbody")


// Fetch
fetch("http://localhost:5500/user")
.then(res => res.json())
.then(json => {
    json.map(data => {
        console.log(data)
        tbody.append(td_fun(data));
    })
})

// create td
function td_fun({profile,name,tweet_text,handle,time}){
    let td=document.createElement('tr');
    td.innerHTML=`
    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                                <img src="${profile}" class="h-10 w-10 rounded-full">
                            </div>
                            <div class="ml-4">
                                <div class="text-sm font-medium text-gray-900">
                                    ${name}
                                </div>
                                <div class="text-sm text-gray-500">
                                    ${tweet_text}
                                </div>
                            </div>
                        </div>
                    </td>
                     <td class="px-6 py-4 whitespace-nowrap">
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            ${handle}
                        </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <span class="text-sm text-gray-500">${time}</span>
                    </td>
    
    `;
    return td;
}