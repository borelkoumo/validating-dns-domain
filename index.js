import dns from 'dns'

// We can also access promises object from dns module to use promise syntax
// const dnsPromises = dns.promises;

/**
* The dns.resolveMx() method uses the DNS protocol to resolve mail exchange (MX) records for the hostname. 
* The addresses argument passed to the callback function will contain an array of objects containing both 
* the priority and exchange objects
* To get all DNS records, use dns.resolveAny method
* 
*/
const validateEmailDomain = (domainName) => {
  return new Promise((resolve, reject) => {
    dns.resolveMx(domainName, (err, addresses) => {
      if (err) {
        reject(err)
      } else {
        console.log(addresses)
        resolve(addresses.length > 0)
      }
    });
  })
}

validateEmailDomain('gmail.com').then((isValid) => {
  console.log('isValid = ', isValid)
}).catch(err => {
  console.log(err)
})


