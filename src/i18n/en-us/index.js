export default {
  home: {
    welcome_to: "Welcome To",
    dac: "DAC",
    factory: "FACTORY",
    line1: "Create a Decentralized Autonomous Community (DAC) to fit the needs of your organization and community.",
    line2: "Get started with these 5 steps.",
    create_my_dac: "create my dac",
    help_why: "WHY LAUNCH A DAC?",
    help_line1: "The world of static hierarchies and centralized ownership will be disrupted",
    help_learn_more: "Learn more"
  },
  general: {
    and: "and",
    required: "* Required",
    welcome: "Welcome",
    info: "info",
    close: "Close",
    go_to_step: "go to step {step}",
    step: "STEP",
    go_home: "Go home",
    go_back: "go back",
    continue: "save & continue",
    step_of: "Step {active_step} of {max_steps}"
  },
  errors: {
    invalid_url: "This is not a valid url"
  },
  step0: {
    title: ""
  },
  step1: {
    title: "DAC Profile",
    dac_name: "DAC Name",
    dac_name_hint: "Enter a name for your DAC",
    dac_name_rule_length_3: "DAC name must be minimum 3 chars.",
    token_symbol: "Token Symbol",
    token_symbol_hint: "Min 3 / Max 7 chars",
    token_symbol_rule_length_3: "Symbol must have a minimum of 3 chars.",
    token_symbol_rule_length_7: "Symbol can't have more then 7 chars.",
    description: "Description",
    description_hint: "Optional info about your DAC",
    website_url: "Website URL",
    website_url_hint: "Optional link to your website",
    dac_id: "DAC ID",
    dac_id_hint: "Min 5 / Max 11 chars",
    dac_id_rule_length_5: "DAC ID must have a minimum of 5 chars.",
    dac_id_rule_length_11: "DAC ID can't have more then 11 chars.",
    info_line1: "Welcome to the first step in creating your own Decentralized Autonomous Community!",
    info_line2: "To start, specify the name of your DAC as you'd like it displayed.",
    info_line3:
      "Your token symbol should contain capital letters only and is limited to 7 characters. Ideally, you’ll want to avoid using a token symbol which might be confused with existing EOS tokens. This token will be your governance token used by your members to elect custodians.",
    info_line4:
      "A DAC is a group of people with a shared goal. Your DAC Description should let people know what your community goal is all about and why they might want to participate.",
    info_line5:
      "The DAC ID is a unique identifier for your DAC used by the system to keep your data organized together and will be generated from your DAC Name."
  },
  step2: {
    title: "Tokenomics",
    max_supply: "Max Supply {token_symbol}",
    max_supply_hint: "Max supply for your token",
    max_supply_rule_positive: "Value must be positive.",
    issuance: "Issuance {token_symbol}",
    issuance_hint: "Issuance for your token",
    decimals: "Decimals",
    info_line1:
      "The max supply of your token is the total number of tokens you will ever want to have for your DAC. Once this number is set, it can not be changed. Your DAC does not have to issue all the tokens initially created.",
    info_line2: "Most EOS tokens use 4 decimal places so if you’re unsure about this, just leave it as 4."
  },
  step3: {
    ///// right part
    hint1: "The Why’s and How",
    title_right: "Understanding the configurations",
    subtitle1: "You’re configurations bacon ipsum dolor amet leberkas doner kevin pork belly spare ribs biltong.",
    hint2: "LOCKUP ASSETS",
    subtitle_dolor_amet:
      "Dolor amet strip steak sirloin beef t-bone brisket, drumstick bacon kevin kielbasa pork loin. Beef ribs rump landjaeger.",
    hint3: "MAX REQUEST PAY",
    hint4: "LOCKUP",
    hint5: "PERIOD LENGTH",
    hint6: "NUMBER ELECTED",
    hint10: "MAX VOTE",
    ///// left part
    title: "Custodian Configuration",
    only_digits_are_available: "Only digits are available",
    percent_error: "Value should be between 0 and 100"
  },
  step4: {
    ///// right part
    hint1: "The Why’s and How",
    title_right: "Adding Branding and setting colors",
    subtitle1:
      "Your brand is an important part of your DAC, and makes a significant impact on a DAC’s public perception.",
    hint2: "LOGO URL",
    subtitle2: "Your logo is the logo and the word mark.",
    hint3: "LOGOMARK URL",
    subtitle3: "Your logomark is only the mark of the logo.",
    subtitle4: "We recommend using imgur.com to host your logos",
    hint4: "COLOR PALETTE",
    subtitle5:
      "If you are having trouble picking out a good color pallete we recommend view coolors.co to find a color pallete to match your brand.",
    ///// left part
    title: "DAC Brand & URL",
    website_url_alt_hint: "Valid URL is required",
    colors_scheme: "Colors Scheme"
  },
  step5: {
    title: "Pay & Create DAC",
    info_line1: "TBD: Pay & Create DAC",
    ///// left part
    pay_month: "Pay month to month.",
    creation_of_account: "Creation of Accounts",
    once_you: "Once you purchase, the DAC will be initially under the control of the account which set it up",
    i_agree_with: "I agree with",
    terms: "terms",
    conditions: "conditions",
    /////
    "30_days": "30 days",
    due_on: "due on the 1st of each month",
    pay: "pay",
    login_to_pay: "login to pay",
    pay_in: "pay in"
  }
};
