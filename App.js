import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Alert, StyleSheet } from 'react-native';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);

  const categories = ['Account Problem', 'Technical Issue', 'Payment Concern', 'Other'];

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert('Permission needed', 'Please allow gallery access to attach a screenshot.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ['images'], quality: 0.7 });
    if (result.canceled) {
      return;
    }
    setImage(result.assets[0]);
  };

  const handleSubmit = () => {
    if (!name.trim() || !email.trim() || !category || !message.trim()) {
      Alert.alert('Missing information', 'Please fill in all required fields.');
      return;
    }
    if (!image) {
      Alert.alert('Screenshot needed', 'Please attach a screenshot.');
      return;
    }
    Alert.alert('Form is valid', 'Upload and email will be added next.');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Customer Support</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Your name" />

      <Text style={styles.label}>Email Address</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="you@example.com"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Issue Category</Text>
      <View style={styles.chips}>
        {categories.map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.chip, category === item && styles.chipSelected]}
            onPress={() => setCategory(item)}
          >
            <Text style={category === item ? styles.chipTextSelected : styles.chipText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Message</Text>
      <TextInput
        style={[styles.input, styles.messageInput]}
        value={message}
        onChangeText={setMessage}
        placeholder="Describe your problem"
        multiline
      />

      <Text style={styles.label}>Screenshot</Text>
      <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
        <Text style={styles.uploadText}>{image ? 'Change Screenshot' : 'Upload Screenshot'}</Text>
      </TouchableOpacity>

      {image && (
        <View style={styles.previewBox}>
          <Image source={{ uri: image.uri }} style={styles.preview} />
          <TouchableOpacity onPress={() => setImage(null)}>
            <Text style={styles.removeText}>Remove image</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,                  
    paddingTop: 60,              
    backgroundColor: '#fff',     
  },
  title: {
    fontSize: 26,                
    fontWeight: 'bold',           
    marginBottom: 20,           
  },
  label: {
    fontSize: 15,                 
    fontWeight: '600',            
    marginTop: 14,                
    marginBottom: 6,            
  },
  input: {
    borderWidth: 1,              
    borderColor: '#ccc',          
    borderRadius: 8,              
    padding: 10,                 
    fontSize: 15,                
  },
  messageInput: {
    height: 110,                  
    textAlignVertical: 'top',     
  },
  chips: {
    flexDirection: 'row',        
    flexWrap: 'wrap',            
    gap: 8,                    
  },
  chip: {
    borderWidth: 1,              
    borderColor: '#ccc',         
    borderRadius: 20,            
    paddingVertical: 6,           
    paddingHorizontal: 12,        
  },
  chipSelected: {
    backgroundColor: '#2563eb',   
    borderColor: '#2563eb',       
  },
  chipText: {
    color: '#333',               
  },
  chipTextSelected: {
    color: '#fff',               
  },
  uploadButton: {
    borderWidth: 1,              
    borderColor: '#2563eb',      
    borderRadius: 8,              
    padding: 12,                 
    alignItems: 'center',         
  },
  uploadText: {
    color: '#2563eb',            
    fontWeight: '600',            
  },
  previewBox: {
    alignItems: 'center',         
    marginTop: 12,              
  },
  preview: {
    width: '100%',               
    height: 220,                  
    borderRadius: 8,             
  },
  removeText: {
    color: '#dc2626',            
    marginTop: 8,                
  },
  submitButton: {
    backgroundColor: '#2563eb',   
    borderRadius: 8,              
    padding: 14,                  
    alignItems: 'center',         
    marginTop: 24,               
    marginBottom: 40,             
  },
  submitText: {
    color: '#fff',                
    fontWeight: 'bold',          
    fontSize: 16,                
  },
});