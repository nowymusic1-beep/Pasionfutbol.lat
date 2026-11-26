-- Reemplaza las camisetas antiguas por el catálogo PF de 63 variantes (ver storefront/products.json).
-- Quita de la base todas las camisetas y poleras; las 63 nuevas se sirven desde products.json.
DELETE FROM products
WHERE EXISTS (
  SELECT 1 FROM json_each(products.categories)
  WHERE lower(trim(value)) IN ('camisetas', 'poleras')
);
