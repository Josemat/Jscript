package customers.UI;

import java.awt.BorderLayout;
import java.awt.EventQueue;
import java.util.ArrayList;
import java.util.Arrays;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JTextArea;
import java.awt.Color;
import javax.swing.UIManager;
import javax.swing.JLabel;
import javax.swing.JTextField;
import javax.swing.JButton;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import javax.swing.JList;
import javax.swing.JTextPane;
import customers.domain.customer;

public class CreateCustomer extends JFrame {

	private JPanel contentPane;
	private JTextField textFieldName;
	private JTextField textFieldLastName;
	private JTextField textFieldNatId;
	private JLabel lblNewLabel_2;
	private JLabel lblNewLabel_3;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					CreateCustomer frame = new CreateCustomer();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the frame.
	 */
	public CreateCustomer() {
		setTitle("Carga de clientes");
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 450, 447);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		
		JLabel lblNewLabel = new JLabel("Bienvenido, a continuaci\u00F3n ingrese datos del cliente");
		lblNewLabel.setBounds(10, 38, 384, 14);
		contentPane.add(lblNewLabel);
		
		textFieldName = new JTextField();
		textFieldName.setToolTipText("Nombre completo");
		textFieldName.setBounds(147, 63, 225, 20);
		contentPane.add(textFieldName);
		textFieldName.setColumns(10);
		
		textFieldLastName = new JTextField();
		textFieldLastName.setToolTipText("Apellido");
		textFieldLastName.setBounds(147, 94, 225, 20);
		contentPane.add(textFieldLastName);
		textFieldLastName.setColumns(10);
		
		textFieldNatId = new JTextField();
		textFieldNatId.setToolTipText("Ingrese id");
		textFieldNatId.setBounds(147, 125, 225, 20);
		contentPane.add(textFieldNatId);
		textFieldNatId.setColumns(10);
		
		JLabel lblNewLabel_1 = new JLabel("Primer nombre");
		lblNewLabel_1.setBounds(20, 66, 117, 14);
		contentPane.add(lblNewLabel_1);
		
		lblNewLabel_2 = new JLabel("Apellido");
		lblNewLabel_2.setBounds(20, 97, 117, 14);
		contentPane.add(lblNewLabel_2);
		
		lblNewLabel_3 = new JLabel("ID nacional");
		lblNewLabel_3.setBounds(20, 128, 117, 14);
		contentPane.add(lblNewLabel_3);
		ArrayList<customer> arrayCustomer = new ArrayList<>();
		
		JButton btnAceptar = new JButton("Aceptar");
		btnAceptar.addMouseListener(new MouseAdapter() {
			@Override
			public void mouseClicked(MouseEvent e) {

				customer newCustomer = new customer();
				newCustomer.setFirstName(textFieldName.getText());
				newCustomer.setLastName(textFieldLastName.getText());
				newCustomer.setNationalId(textFieldNatId.getText());
				arrayCustomer.add(newCustomer);
			System.out.println(arrayCustomer);
			}
		});
		btnAceptar.setBounds(102, 179, 89, 23);
		contentPane.add(btnAceptar);
		
		JButton btnCancelar = new JButton("Cancelar");
		btnCancelar.setBounds(218, 179, 89, 23);
		contentPane.add(btnCancelar);
		
		JTextArea textArea = new JTextArea();
		textArea.setBounds(87, 216, 287, 154);
		contentPane.add(textArea);
	}
}
