import '../App.css';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Badge, Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import api from '../services/api';

export default function LeadsPage() {
  const { id } = useParams();
  const [leads, setLeads] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const responseLeads = await api.get('/products/read-all-leads');
      const responseProduct = await api.get(`/products/read-product/${id}`);

      const filteredProductLeads = responseLeads.data.filter(
        (lead) => lead.product_interest === responseProduct.data.name
      );
      setLeads(filteredProductLeads);
    } catch (err) {
      console.log(err.response?.data?.message || 'Failed to fetch leads');
    }
  };

  console.log('leads: ', leads);

  function BackToProduct() {
    navigate(`/products/${id}`);
  }

  return (
    <div className="leads-container">
      <div className="leads-title">
        <h1 className="text-center">Product Leads</h1>
        <div
          className="d-flex justify-content-start"
          style={{ width: '10rem' }}
        >
          <Button
            style={{ width: '5rem', margin: 10, fontSize: 'large' }}
            variant="secondary"
            size="sm"
            onClick={BackToProduct}
          >
            Back to Product
          </Button>
        </div>
      </div>

      <div className="leads-table">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Product Interest</th>
              <th>Lead Source</th>
              <th>Status</th>
              <th>Note</th>
              <th>Submission Date</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{lead.full_name}</td>
                <td>{lead.email}</td>
                <td>{lead.phone}</td>
                <td>{lead.product_interest}</td>
                <td>{lead.lead_source}</td>
                <td>
                  <Badge
                    bg={
                      lead.status === 'Converted'
                        ? 'success'
                        : lead.status === 'New'
                        ? 'primary'
                        : 'warning'
                    }
                  >
                    {lead.status}
                  </Badge>
                </td>
                <td>{lead.note}</td>
                <td>{new Date(lead.submission_date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
