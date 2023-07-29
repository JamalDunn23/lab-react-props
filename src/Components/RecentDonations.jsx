import React from 'react'

function RecentDonations({donations}) {
  let donorName = ""
    let donorAmount = ""
    let donorMeassage = ""
    const donationList = []
  
  for(let donation of donations){
     donationList.push(
     <li><span>
      {donation.name} donated ${donation.amount}</span> {donation.caption}
     </li>)
  }
  
  return (
    <div>
      <section>
  <h2>Recent Donations</h2>
  <ul>
  {donationList}
    
  </ul>
</section>
    </div>
  )
}

export default RecentDonations