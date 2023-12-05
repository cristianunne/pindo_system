from django import forms
from procedencias.models import Procedencias


class CreateProcedenciaForm(forms.ModelForm):
    
    class Meta:
        model = Procedencias
        fields = ['name', 'especie', 'origen', 'mejora', 'vivero']


class EditProcedenciaForm(forms.ModelForm):
    
    class Meta:
        model = Procedencias
        fields = ['name', 'especie', 'origen', 'mejora', 'vivero']