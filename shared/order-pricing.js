function isShirt(item) {
  return Array.isArray(item.categories) && item.categories.some(category => ["poleras","camisetas"].includes(category.trim().toLowerCase()));
}
function promotionActive(now = Date.now()) {
  return now < Date.parse("2027-01-01T00:00:00-03:00");
}
function orderPricing(items, now = Date.now()) {
  let subtotal = 0;
  const prices = [];
  for (const item of items) {
    subtotal += item.price * item.quantity;
    if (isShirt(item)) for (let i=0;i<item.quantity;i++) prices.push(item.price);
  }
  if (!promotionActive(now)) return {subtotal,percent:0,discount:0,amount:subtotal};
  prices.sort((a,b)=>a-b);
  const dp=[0];
  for(let i=1;i<=prices.length;i++){
    dp[i]=dp[i-1]+prices[i-1];
    for(const [count,price] of [[2,24990],[3,36990],[4,44990]]) if(i>=count) dp[i]=Math.min(dp[i],dp[i-count]+price);
  }
  const eligibleSubtotal=prices.reduce((sum,p)=>sum+p,0);
  const discount=eligibleSubtotal-dp[prices.length];
  return {subtotal,percent:eligibleSubtotal?Math.round(discount*100/eligibleSubtotal):0,discount,amount:subtotal-discount};
}
