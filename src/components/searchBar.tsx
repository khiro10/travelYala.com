import { AutoComplete, AutoCompleteProps, Input } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function SearchBar() {
  const navigate = useNavigate();
  const [options, setOptions] = useState<AutoCompleteProps['options']>([]);

  const handleSearch = async (value: string) => {
    if (!value) {
      setOptions([]);
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:5000/api/countries?search=${value}`);
      const data = await response.json();
  
      const formattedOptions = data.map((item: string) => ({
        value: item,
        label: (
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>{item}</span>
          </div>
        )
      }));
  
      setOptions(formattedOptions);
    } catch (err) {
      console.error("Search error:", err);
    }
  };

  const onSelect = (value: string) => {
    navigate(`/country/${value}`)
  };

  return (
    <AutoComplete
      className='searchBtn'
      popupMatchSelectWidth={300}
      style={{ width: 300 }}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
      size="large"
    >
      <Input.Search size="large" placeholder="Search country..." enterButton />
    </AutoComplete>
  );
}
