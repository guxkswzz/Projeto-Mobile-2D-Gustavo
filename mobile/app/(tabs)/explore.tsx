import { StyleSheet, TextInput, View, Text, TouchableOpacity, ScrollView } from 'react-native';

export default function PixScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Área Pix</Text>

      <Text style={styles.label}>Digite a chave Pix</Text>
      <TextInput
        placeholder="E-mail, CPF, número ou chave aleatória"
        placeholderTextColor="#aaa"
        style={styles.input}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Enviar Pix</Text>
      </TouchableOpacity>

      <Text style={styles.recentes}>Transferências Pix Recentes:</Text>

      {recentContacts.map((contact, index) => (
        <View key={index} style={styles.contactCard}>
          <Text style={styles.contactName}>{contact.name}</Text>
          <Text style={styles.contactKey}>{contact.key}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const recentContacts = [
  { name: 'Gustavo Ananias', key: 'gustavo.ananias@email.com' },
  { name: 'João Pedro', key: 'joao.cpf.***.***-45' },
  { name: 'Mariana Lopes', key: 'marilopes@pix.com' },
  { name: 'Lucas Moreira', key: '(41) 91234-5678' },
  { name: 'Rafael Silva', key: 'rafael.cpf.***.***-25' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    padding: 20,
  },
  titulo: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    color: '#9FA8DA',
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#1A1A2E',
    color: '#fff',
    padding: 14,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#00E676',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  recentes: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  contactCard: {
    backgroundColor: '#1A1A2E',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  contactName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  contactKey: {
    color: '#ccc',
    fontSize: 14,
  },
});
