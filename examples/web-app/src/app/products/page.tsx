import { Container, Section } from '@tanqory/mies-core-web/layout';
import { Card, CardHeader, CardContent } from '@tanqory/mies-core-web/card';
import { Button } from '@tanqory/mies-core-web/button';
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableRow, 
  TableHeaderCell, 
  TableCell 
} from '@tanqory/mies-core-web/table';
import { TagIcon, BoxIcon, CartIcon } from '@tanqory/mies-icons/web';

// Mock data fetching function (simulates API call)
async function getProducts() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return [
    { 
      id: 1, 
      name: 'Wireless Headphones', 
      category: 'Electronics', 
      price: 299.99, 
      stock: 45,
      status: 'In Stock'
    },
    { 
      id: 2, 
      name: 'Ergonomic Office Chair', 
      category: 'Furniture', 
      price: 599.99, 
      stock: 12,
      status: 'Low Stock'
    },
    { 
      id: 3, 
      name: 'Mechanical Keyboard', 
      category: 'Electronics', 
      price: 149.99, 
      stock: 0,
      status: 'Out of Stock'
    },
    { 
      id: 4, 
      name: 'Standing Desk', 
      category: 'Furniture', 
      price: 899.99, 
      stock: 8,
      status: 'In Stock'
    },
    { 
      id: 5, 
      name: 'Wireless Mouse', 
      category: 'Electronics', 
      price: 79.99, 
      stock: 67,
      status: 'In Stock'
    },
    { 
      id: 6, 
      name: 'Monitor Stand', 
      category: 'Accessories', 
      price: 49.99, 
      stock: 23,
      status: 'In Stock'
    },
    { 
      id: 7, 
      name: 'USB-C Hub', 
      category: 'Electronics', 
      price: 89.99, 
      stock: 5,
      status: 'Low Stock'
    },
    { 
      id: 8, 
      name: 'Desk Lamp', 
      category: 'Accessories', 
      price: 69.99, 
      stock: 34,
      status: 'In Stock'
    }
  ];
}

function getStatusColor(status: string) {
  switch (status) {
    case 'In Stock':
      return 'text-black';
    case 'Low Stock':
      return 'text-black opacity-70';
    case 'Out of Stock':
      return 'text-black opacity-40';
    default:
      return 'text-black';
  }
}

function getStatusIcon(status: string) {
  switch (status) {
    case 'In Stock':
      return <BoxIcon size={14} className="text-brand" />;
    case 'Low Stock':
      return <TagIcon size={14} className="text-black opacity-70" />;
    case 'Out of Stock':
      return <BoxIcon size={14} className="text-black opacity-40" />;
    default:
      return null;
  }
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      {/* Page Header */}
      <Section spacing="lg">
        <Container>
          <div className="flex items-center justify-between mb-32">
            <div>
              <h1 className="text-2xl font-sans text-black mb-8">
                Products
              </h1>
              <p className="text-base font-sans text-black opacity-70">
                Manage your product inventory and catalog
              </p>
            </div>
            
            <div className="flex gap-12">
              <Button variant="outline">
                Export
              </Button>
              <Button variant="primary">
                Add Product
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Stats Cards */}
      <Section spacing="base">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mb-32">
            <Card padding="base">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-sans text-black opacity-70 mb-4">Total Products</p>
                  <p className="text-2xl font-sans text-black font-medium">{products.length}</p>
                </div>
                <BoxIcon size={24} className="text-brand" />
              </div>
            </Card>

            <Card padding="base">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-sans text-black opacity-70 mb-4">In Stock</p>
                  <p className="text-2xl font-sans text-black font-medium">
                    {products.filter(p => p.status === 'In Stock').length}
                  </p>
                </div>
                <CartIcon size={24} className="text-brand" />
              </div>
            </Card>

            <Card padding="base">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-sans text-black opacity-70 mb-4">Total Value</p>
                  <p className="text-2xl font-sans text-black font-medium">
                    ${products.reduce((sum, p) => sum + (p.price * p.stock), 0).toLocaleString()}
                  </p>
                </div>
                <TagIcon size={24} className="text-brand" />
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Products Table */}
      <Section spacing="lg">
        <Container>
          <Card padding="none">
            <CardHeader>
              <div className="px-24 py-16">
                <h2 className="text-lg font-sans text-black">Product Inventory</h2>
                <p className="text-sm font-sans text-black opacity-70 mt-4">
                  Complete list of products with stock levels and status
                </p>
              </div>
            </CardHeader>
            
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell>Product</TableHeaderCell>
                    <TableHeaderCell>Category</TableHeaderCell>
                    <TableHeaderCell align="right">Price</TableHeaderCell>
                    <TableHeaderCell align="center">Stock</TableHeaderCell>
                    <TableHeaderCell align="center">Status</TableHeaderCell>
                    <TableHeaderCell align="right">Actions</TableHeaderCell>
                  </TableRow>
                </TableHeader>
                
                <TableBody>
                  {products.map((product, index) => (
                    <TableRow key={product.id} index={index}>
                      <TableCell>
                        <div className="font-medium">
                          {product.name}
                        </div>
                      </TableCell>
                      
                      <TableCell>
                        <span className="text-sm opacity-80">
                          {product.category}
                        </span>
                      </TableCell>
                      
                      <TableCell align="right">
                        <span className="font-mono">
                          ${product.price.toFixed(2)}
                        </span>
                      </TableCell>
                      
                      <TableCell align="center">
                        <span className={`font-mono ${product.stock === 0 ? 'opacity-40' : ''}`}>
                          {product.stock}
                        </span>
                      </TableCell>
                      
                      <TableCell align="center">
                        <div className="flex items-center justify-center gap-4">
                          {getStatusIcon(product.status)}
                          <span className={`text-sm ${getStatusColor(product.status)}`}>
                            {product.status}
                          </span>
                        </div>
                      </TableCell>
                      
                      <TableCell align="right">
                        <div className="flex gap-8 justify-end">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Container>
      </Section>

      {/* Summary Section */}
      <Section spacing="base">
        <Container>
          <Card padding="lg">
            <div className="text-center">
              <h3 className="text-lg font-sans text-black mb-16">
                Table Demo Complete
              </h3>
              <p className="text-base font-sans text-black opacity-80 mb-24">
                This table demonstrates server-side rendering with mock data fetching, 
                responsive design, and consistent styling with the Mies design system.
              </p>
              
              <div className="flex gap-12 justify-center">
                <Button variant="primary">
                  Add New Product
                </Button>
                <Button variant="outline">
                  Export Data
                </Button>
              </div>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  );
}