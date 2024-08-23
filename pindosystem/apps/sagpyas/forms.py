from django import forms
from sagpyas.models import Sagpyas


class CreateSagpyasForm(forms.ModelForm):
    
    class Meta:
        model = Sagpyas
        fields = ['operaciones', 'fecha', 'sup_aprobada']


class EditSagpyasForm(forms.ModelForm):
    
    class Meta:
        model = Sagpyas
        fields = ['operaciones', 'fecha', 'sup_aprobada']
