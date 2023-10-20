import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <View >
        <Text style={{margin:'11px',fontSize:'25px',color:'#E94141',lineHeight:'28px',fontWeight:'bold'}} >The world’s Best Bike</Text>
        </View>
        <View style={{width:'95%',height:'100px',flexDirection:'row',justifyContent:'space-around',alignItems:'flex-end'}}>
            <TouchableOpacity style={{
                width:'99px',height:32,borderRadius:5,borderColor:'#E9414187',justifyContent:'center',alignItems:'center'
            }}>
                <Text style={{color:'#BEB6B6', fontSize:'18px' }}>
                All
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                width:'99px',height:32,borderRadius:5,borderColor:'#E9414187',justifyContent:'center',alignItems:'center'
            }}>
                <Text style={{color:'#BEB6B6', fontSize:'18px' }}>
                Roadbike
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                width:'99px',height:32,borderRadius:5,borderColor:'#E9414187',justifyContent:'center',alignItems:'center'
            }}>
                <Text style={{color:'#BEB6B6', fontSize:'18px' }}>
                Mountain
                </Text>
            </TouchableOpacity>
        </View>
        <View style={{width:'95%',height:'70%',marginTop:'40px',flexDirection:'column'}}>
            <ScrollView>
            <View style={{width:'100%',height:'190px',flexDirection:'row',justifyContent:'space-around'}}>
                <View style={{backgroundColor:'#F7BA8326',width:'45%',height:'100%',alignItems:'center'}}>
                    <View style={{flexDirection:'row',width:'100%',height:'65%',marginTop:10}}>
                        <TouchableOpacity>
                        <Image style={{width:'22px',height:'22px'}} source={require('../assets/heart.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Image style={{width:'122px',height:'122px'}} source={require('../assets/bifour_-removebg-preview.png')} />

                        </TouchableOpacity>
                    </View>
                    <Text style={{fontSize:'20px'}}> 
                    Pinarello
                    </Text>
                    <View style={{flexDirection:'row',width:'100%',height:'20%',justifyContent:'center'}}>
                    <Text style={{color:'#F7BA83',fontSize:'20px'}}>
                    $
                    </Text>
                    <Text style={{fontSize:'20px'}}>
                    1800
                    </Text> 
                    </View>
                </View>
                <View style={{backgroundColor:'#F7BA8326',width:'45%',height:'100%',alignItems:'center'}}>
                    <View style={{flexDirection:'row',width:'100%',height:'70%',marginTop:10}}>
                        <TouchableOpacity>
                        <Image style={{width:'22px',height:'22px'}} source={require('../assets/heart.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Image style={{width:'122px',height:'122px'}} source={require('../assets/bione-removebg-preview.png')} />

                        </TouchableOpacity>
                    </View>
                    <Text style={{fontSize:'20px'}}> 
                    Pinarello
                    </Text>
                    <View style={{flexDirection:'row',width:'100%',height:'20%',justifyContent:'center'}}>
                    <Text style={{color:'#F7BA83',fontSize:'20px'}}>
                    $
                    </Text>
                    <Text style={{fontSize:'20px'}}>
                    1800
                    </Text> 
                    </View>
                </View>
            </View>
            <View style={{width:'100%',height:'190px',flexDirection:'row',justifyContent:'space-around'}}>
            <View style={{backgroundColor:'#F7BA8326',width:'45%',height:'100%',alignItems:'center'}}>
                    <View style={{flexDirection:'row',width:'100%',height:'70%',marginTop:10}}>
                        <TouchableOpacity>
                        <Image style={{width:'22px',height:'22px'}} source={require('../assets/heart.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Image style={{width:'122px',height:'122px'}} source={require('../assets/bithree_removebg-preview.png')} />

                        </TouchableOpacity>
                    </View>
                    <Text style={{fontSize:'20px'}}> 
                    Pinarello
                    </Text>
                    <View style={{flexDirection:'row',width:'100%',height:'20%',justifyContent:'center'}}>
                    <Text style={{color:'#F7BA83',fontSize:'20px'}}>
                    $
                    </Text>
                    <Text style={{fontSize:'20px'}}>
                    1800
                    </Text> 
                    </View>
                </View>
                <View style={{backgroundColor:'#F7BA8326',width:'45%',height:'100%',alignItems:'center'}}>
                    <View style={{flexDirection:'row',width:'100%',height:'70%',marginTop:10}}>
                        <TouchableOpacity>
                        <Image style={{width:'22px',height:'22px'}} source={require('../assets/heart.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Image style={{width:'122px',height:'122px'}} source={require('../assets/bitwo-removebg-preview.png')} />

                        </TouchableOpacity>
                    </View>
                    <Text style={{fontSize:'20px'}}> 
                    Pinarello
                    </Text>
                    <View style={{flexDirection:'row',width:'100%',height:'20%',justifyContent:'center'}}>
                    <Text style={{color:'#F7BA83',fontSize:'20px'}}>
                    $
                    </Text>
                    <Text style={{fontSize:'20px'}}>
                    1800
                    </Text> 
                    </View>
                </View>
            </View>
            <View style={{width:'100%',height:'190px',flexDirection:'row',justifyContent:'space-around'}}>
            <View style={{backgroundColor:'#F7BA8326',width:'45%',height:'100%',alignItems:'center'}}>
                    <View style={{flexDirection:'row',width:'100%',height:'70%',marginTop:10}}>
                        <TouchableOpacity>
                        <Image style={{width:'22px',height:'22px'}} source={require('../assets/heart.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Image style={{width:'122px',height:'122px'}} source={require('../assets/bithree_removebg-preview.png')} />

                        </TouchableOpacity>
                    </View>
                    <Text style={{fontSize:'20px'}}> 
                    Pinarello
                    </Text>
                    <View style={{flexDirection:'row',width:'100%',height:'20%',justifyContent:'center'}}>
                    <Text style={{color:'#F7BA83',fontSize:'20px'}}>
                    $
                    </Text>
                    <Text style={{fontSize:'20px'}}>
                    1800
                    </Text> 
                    </View>
                </View>
                <View style={{backgroundColor:'#F7BA8326',width:'45%',height:'100%',alignItems:'center'}}>
                    <View style={{flexDirection:'row',width:'100%',height:'70%',marginTop:10}}>
                        <TouchableOpacity>
                        <Image style={{width:'22px',height:'22px'}} source={require('../assets/heart.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Image style={{width:'122px',height:'122px'}} source={require('../assets/bione-removebg-preview.png')} />

                        </TouchableOpacity>
                    </View>
                    <Text style={{fontSize:'20px'}}> 
                    Pinarello
                    </Text>
                    <View style={{flexDirection:'row',width:'100%',height:'20%',justifyContent:'center'}}>
                    <Text style={{color:'#F7BA83',fontSize:'20px'}}>
                    $
                    </Text>
                    <Text style={{fontSize:'20px'}}>
                    1800
                    </Text> 
                    </View>
                </View>
            </View>
            </ScrollView>
            
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center'
  },
});
