export const generate = {
  /**
   * Generates test data for (in)valid credentials
   * 
   * @param {boolean} validCredentials Need of (in)valid credentials.
   * 
   * @return {object} email, password Object containing 
   *                  strings of email and password
   * 
   **/
  credentials: (validCredentials) => {
    let email = "test";
    let password = "test";

    if (validCredentials) {
      email = "Tester@bitvavo.com";
      password = "BitcoinMiner1905";
    }
    
    return {
      email,
      password
    }
}
} 