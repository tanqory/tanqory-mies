import { Container, Section } from '@tanqory/mies-core-web/layout';
import { Card, CardHeader, CardContent } from '@tanqory/mies-core-web/card';
import { Button } from '@tanqory/mies-core-web/button';
import { 
  Form, 
  FormField, 
  Label, 
  Input, 
  Textarea, 
  Select, 
  FormActions 
} from '@tanqory/mies-core-web/form';
import { BoxIcon, TagIcon, CreditCardIcon } from '@tanqory/mies-icons/web';
import { redirect } from 'next/navigation';

// Server action to handle form submission
async function createProduct(formData: FormData) {
  'use server';
  
  const productData = {
    name: formData.get('name') as string,
    description: formData.get('description') as string,
    category: formData.get('category') as string,
    price: parseFloat(formData.get('price') as string),
    stock: parseInt(formData.get('stock') as string),
    sku: formData.get('sku') as string,
    tags: formData.get('tags') as string,
    status: formData.get('status') as string,
    supplier: formData.get('supplier') as string,
  };
  
  // Log the data (simulating API call or database save)
  console.log('🚀 Creating new product:');
  console.log('📦 Product Data:', JSON.stringify(productData, null, 2));
  console.log('💰 Total value:', `$${(productData.price * productData.stock).toFixed(2)}`);
  
  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Redirect to products page after successful creation
  redirect('/products');
}

export default function NewProductPage() {
  return (
    <>
      {/* Page Header */}
      <Section spacing="lg">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-2xl font-sans text-black mb-16">
              Create New Product
            </h1>
            <p className="text-base font-sans text-black opacity-80">
              Add a new product to your inventory with detailed information
            </p>
          </div>
        </Container>
      </Section>

      {/* Form Section */}
      <Section spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Card padding="lg">
              <CardHeader>
                <div className="flex items-center gap-12">
                  <BoxIcon size={24} className="text-brand" />
                  <h2 className="text-lg font-sans text-black">Product Information</h2>
                </div>
                <p className="text-sm font-sans text-black opacity-70 mt-8">
                  Fill out the form below to create a new product. All required fields must be completed.
                </p>
              </CardHeader>
              
              <CardContent>
                <Form action={createProduct} spacing="lg">
                  {/* Basic Information */}
                  <div className="space-y-16">
                    <h3 className="text-base font-sans text-black font-medium border-b border-1 border-black pb-8">
                      Basic Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                      <FormField>
                        <Label required>Product Name</Label>
                        <Input 
                          name="name"
                          placeholder="Enter product name"
                          required
                        />
                      </FormField>
                      
                      <FormField>
                        <Label required>SKU</Label>
                        <Input 
                          name="sku"
                          placeholder="PRD-001"
                          required
                        />
                      </FormField>
                    </div>
                    
                    <FormField>
                      <Label>Description</Label>
                      <Textarea 
                        name="description"
                        placeholder="Describe your product..."
                        rows={4}
                      />
                    </FormField>
                    
                    <FormField>
                      <Label required>Category</Label>
                      <Select name="category" required>
                        <option value="">Select a category</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Books">Books</option>
                        <option value="Home">Home & Garden</option>
                        <option value="Sports">Sports & Outdoors</option>
                      </Select>
                    </FormField>
                  </div>

                  {/* Pricing & Inventory */}
                  <div className="space-y-16">
                    <h3 className="text-base font-sans text-black font-medium border-b border-1 border-black pb-8 flex items-center gap-8">
                      <CreditCardIcon size={16} />
                      Pricing & Inventory
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                      <FormField>
                        <Label required>Price ($)</Label>
                        <Input 
                          name="price"
                          type="number"
                          step="0.01"
                          min="0"
                          placeholder="0.00"
                          required
                        />
                      </FormField>
                      
                      <FormField>
                        <Label required>Stock Quantity</Label>
                        <Input 
                          name="stock"
                          type="number"
                          min="0"
                          placeholder="0"
                          required
                        />
                      </FormField>
                    </div>
                    
                    <FormField>
                      <Label>Status</Label>
                      <Select name="status">
                        <option value="">Select status</option>
                        <option value="In Stock">In Stock</option>
                        <option value="Low Stock">Low Stock</option>
                        <option value="Out of Stock">Out of Stock</option>
                        <option value="Discontinued">Discontinued</option>
                      </Select>
                    </FormField>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-16">
                    <h3 className="text-base font-sans text-black font-medium border-b border-1 border-black pb-8 flex items-center gap-8">
                      <TagIcon size={16} />
                      Additional Details
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                      <FormField>
                        <Label>Supplier</Label>
                        <Input 
                          name="supplier"
                          placeholder="Supplier name"
                        />
                      </FormField>
                      
                      <FormField>
                        <Label>Tags</Label>
                        <Input 
                          name="tags"
                          placeholder="tag1, tag2, tag3"
                        />
                      </FormField>
                    </div>
                  </div>

                  {/* Form Actions */}
                  <FormActions align="right" spacing="base">
                    <Button type="button" variant="outline">
                      Cancel
                    </Button>
                    <Button type="submit" variant="primary">
                      Create Product
                    </Button>
                  </FormActions>
                </Form>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Help Section */}
      <Section spacing="base">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Card padding="base">
              <div className="text-center">
                <h3 className="text-base font-sans text-black mb-12">
                  Form Demo with Server Actions
                </h3>
                <p className="text-sm font-sans text-black opacity-70">
                  This form uses Next.js server actions to handle submission. 
                  Check your console logs to see the submitted data. 
                  After submission, you'll be redirected to the products page.
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}