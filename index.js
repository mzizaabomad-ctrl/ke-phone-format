function formatKenyanPhone(phone) {
  phone = String(phone).replace(/\s+/g, '');

  if (phone.startsWith('07') || phone.startsWith('01')) {
    return '+254' + phone.substring(1);
  }

  if (phone.startsWith('254')) {
    return '+' + phone;
  }

  if (phone.startsWith('+254')) {
    return phone;
  }

  throw new Error('Invalid Kenyan phone number');
}

module.exports = formatKenyanPhone;
