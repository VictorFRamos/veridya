import { useEffect, useState } from 'react';
import api from '../../services/api';
import CertificateCard from '../../components/client/CertificateCard';

function Certificates() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCertificates() {
      try {
        const response = await api.get('/client/certificates');
        setCertificates(response.data);
      } catch (error) {
        console.error('Erro ao carregar certificados:', error);
      } finally {
        setLoading(false);
      }
    }
    
    loadCertificates();
  }, []);

  if (loading) return <div>Carregando...</div>;

  return (
    <div className="certificates-page">
      <h2>Meus Certificados</h2>
      
      <div className="certificates-grid">
        {certificates.length > 0 ? (
          certificates.map(cert => (
            <CertificateCard key={cert.id} certificate={cert} />
          ))
        ) : (
          <p>Nenhum certificado encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default Certificates;