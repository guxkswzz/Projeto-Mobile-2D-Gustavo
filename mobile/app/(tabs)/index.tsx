import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function Home() {
  return (
    <ScrollView style={styles.sim}>
      <Image source={require('@/assets/images/logo.png')} style={styles.logo} />

      <Text style={styles.header}>Olá, Usuário</Text>

      <View style={styles.conta}>
        <Text style={styles.label}>Saldo</Text>
        <Text style={styles.balance}>R$ 56,87</Text>
      </View>

      <View style={styles.botao}>
        <ActionButton label="Pix" />
        <ActionButton label="Pagar" />
        <ActionButton label="Transferir" />
        <ActionButton label="Depositar" />
      </View>

      <View style={styles.cartao}>
        <Text style={styles.cartaoBloq}>Cartão bloqueado</Text>
        <Text style={styles.fatura}>Fatura atual</Text>
        <Text style={styles.devendo}>R$ 1.686,03</Text>
        <Text style={styles.fatura}>Limite disponível de R$ 0,02</Text>
      </View>
    </ScrollView>
  );
}

function ActionButton({ label }: { label: string }) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  sim: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'left',
  },
  header: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  conta: {
    marginBottom: 20,
    backgroundColor: '#1A1A2E',
    padding: 16,
    borderRadius: 12,
  },
  label: {
    color: '#9FA8DA',
    fontSize: 16,
  },
  balance: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  botao: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#00E676',
    padding: 14,
    borderRadius: 12,
    width: '47%',
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  cartao: {
    backgroundColor: '#1A1A2E',
    borderRadius: 12,
    padding: 16,
    marginTop: 10,
  },
  cartaoBloq: {
    color: '#FF5252',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  fatura: {
    color: '#ccc',
    fontSize: 14,
  },
  devendo: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
});
